import React from "react";
import NavBar from "./NavBar";
import { ShoppingCart, User } from "lucide-react";
import { db } from "@vercel/postgres";
import Link from "next/link";
import { kv } from "@vercel/kv";
import { Badge } from "../primitives/Badge";

export default async function Header() {
	const client = await db.connect();
	const categorys = await client.sql`SELECT DISTINCT category FROM products;`;
	const categories = categorys.rows.map((c) => c.category);
	const cart = await kv.get("cart");
	const cartLength = cart.length;

	return (
		<div className='flex justify-between items-center px-4 py-2'>
			<p>Luke.com</p>
			<NavBar categories={categories} />
			<div className='flex items-center gap-2'>
				<Link href={"/cart"}>
					<div className='relative'>
						<ShoppingCart />
						{cartLength > 0 && (
							<Badge variant={"outline"} className='absolute top-[-10px] left-1'>
								{cartLength}
							</Badge>
						)}
					</div>
				</Link>
				<User />
			</div>
		</div>
	);
}
