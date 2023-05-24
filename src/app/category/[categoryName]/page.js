import ItemCard from "@/components/ItemCard";
import React from "react";

export default async function Page({ params }) {
	const items = await fetch(`https://fakestoreapi.com/products/category/${params.categoryName}`).then((res) => res.json());
	return (
		<main className='flex flex-wrap items-center justify-between p-4 gap-5'>
			{items.map((item) => (
				<ItemCard key={item.id} item={item} />
			))}
		</main>
	);
}
