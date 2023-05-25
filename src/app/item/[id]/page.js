import ItemCard from "@/components/shared/ItemCard";
import { db } from "@vercel/postgres";
import React from "react";

export default async function Page({ params }) {
	const client = await db.connect();
	const product = await client.sql`SELECT * FROM products WHERE id = ${params.id}`;
	return <ItemCard item={product.rows[0]} />;
}
