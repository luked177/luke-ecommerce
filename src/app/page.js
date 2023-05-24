import ItemCard from "@/components/ItemCard";
import React from "react";

export default async function Home() {
	const test = await fetch("https://fakestoreapi.com/products").then((res) => res.json());

	return (
		<main className='flex flex-wrap items-center justify-between p-4 gap-5'>
			{test.map((item) => (
				<ItemCard key={item.id} item={item} />
			))}
		</main>
	);
}
