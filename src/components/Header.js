import React from "react";
import NavBar from "./NavBar";
import { Badge, ShoppingCart } from "lucide-react";

export default async function Header() {
	const categories = await fetch("https://fakestoreapi.com/products/categories").then((res) => res.json());
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
