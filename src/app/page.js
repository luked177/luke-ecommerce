import ItemCard from "@/components/shared/ItemCard";
import React from "react";
import SortSelect from "@/components/page-components/SortSelect";
import { sortProducts, getOrderingSQL } from "@/db/SortProducts";
import SearchInfo from "@/components/page-components/SearchInfo";
import { db } from "@vercel/postgres";

export default async function Home({ searchParams }) {
	const client = await db.connect();
	const products = await sortProducts(searchParams?.sort);
	const query = "SELECT * FROM products WHERE title LIKE $1 OR description LIKE $1" + getOrderingSQL(searchParams?.sort);
	const values = [`%${searchParams?.search}%`];
	const { rows: searchResults } = await client.query(query, values);

	return (
		<main className='p-4 flex flex-col gap-4'>
			<div className='flex w-full justify-between'>
				<SortSelect />
				{searchParams?.search && <SearchInfo searchTerm={searchParams?.search} />}
			</div>

			<div className='flex flex-wrap items-center justify-between gap-5'>
				{searchParams?.search ? searchResults.map((item) => <ItemCard key={item.id} item={item} />) : products.rows.map((item) => <ItemCard key={item.id} item={item} />)}
			</div>
		</main>
	);
}
