import React from "react";
import NavBar from "./NavBar";
import { Badge, ShoppingCart } from "lucide-react";
import { db } from "@vercel/postgres";

export default async function Header() {
	const client = await db.connect();
	const categorys = await client.sql`SELECT DISTINCT category FROM products;`;
	const categories = categorys.rows.map((c) => c.category);

	return (
		<div className='flex justify-between items-center px-4 py-2'>
			<p>Luke.com</p>
			<NavBar categories={categories} />
			<div className='flex items-center gap-2'>
				<ShoppingCart />
				<Badge />
			</div>
		</div>
	);
}
