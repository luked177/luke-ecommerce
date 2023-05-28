import React from "react";
import NavBar from "./NavBar";
import { ShoppingCart } from "lucide-react";
import { db } from "@vercel/postgres";
import Link from "next/link";
import { kv } from "@vercel/kv";
import { Badge } from "../primitives/Badge";
import Search from "./Search";
import { UserButton, auth } from "@clerk/nextjs";

export default async function Header() {
	const client = await db.connect();
	const user = await auth();
	const categorys = await client.sql`SELECT DISTINCT category FROM products;`;
	const categories = categorys.rows.map((c) => c.category);
	const cart = await kv.get(`${user?.userId}_cart`);
	const cartLength = cart?.length || 0;

	return (
		<div className='flex justify-between items-center px-4 py-2'>
			<div className='flex items-center'>
				<Link href={"/"}>
					<p>Luke.com</p>
				</Link>
			</div>

			<NavBar categories={categories} />
			<div className='flex items-center gap-2 justify-end'>
				<Search />
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
				<UserButton />
			</div>
		</div>
	);
}
