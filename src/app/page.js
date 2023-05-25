import ItemCard from "@/components/shared/ItemCard";
import React from "react";
import SortSelect from "@/components/page-components/SortSelect";
import { sortProducts } from "@/db/SortProducts";

export default async function Home({ searchParams }) {
	const products = await sortProducts(searchParams?.sort);

	return (
		<main className='p-4 flex flex-col gap-4'>
			<SortSelect />
			<div className='flex flex-wrap items-center justify-between gap-5'>
				{products.rows.map((item) => (
					<ItemCard key={item.id} item={item} />
				))}
			</div>
		</main>
	);
}
