import { db } from "@vercel/postgres";
import React from "react";
import Modal from "./modal";

export default async function Page({ params }) {
	const client = await db.connect();
	const product = await client.sql`SELECT * FROM products WHERE id = ${params.id}`;
	return (
		<div>
			<Modal item={product.rows[0]} />
		</div>
	);
}
