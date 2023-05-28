import ItemCard from "@/components/shared/ItemCard";
import { db } from "@vercel/postgres";
import React from "react";

export default async function Page({ params }) {
	const client = await db.connect();
	const decodedCategory = decodeURIComponent(params.categoryName.replace("%20", " "));
	const products = await client.sql`SELECT * FROM products WHERE category = ${decodedCategory} ;`;
	const { rows: reviews } = await client.sql`SELECT * FROM reviews`;

	return (
		<main className='flex flex-wrap items-center justify-between p-4 gap-5'>
			{products.rows.map((item) => (
				<ItemCard reviews={reviews.filter((r) => Number(item.id) === r.product_id)} key={item.id} item={item} />
			))}
		</main>
	);
}
