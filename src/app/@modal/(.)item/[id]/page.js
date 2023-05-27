import { db } from "@vercel/postgres";
import React from "react";
import Modal from "./modal";
import Image from "next/image";
import { getStarRating } from "@/utils/starRating";
import CartOptions from "@/components/shared/CartOptions";

export default async function Page({ params }) {
	const client = await db.connect();
	const product = await client.sql`SELECT * FROM products WHERE id = ${params.id}`;
	const item = product.rows[0];
	return (
		<Modal>
			<h1>{item.title}</h1>
			<div className='flex'>
				<div className='w-1/2'>
					<div style={{ width: "180px", height: "180px", position: "relative" }}>
						<Image key={item.id} sizes='100%' className='' src={item.image} alt='Next.js Logo' fill />
					</div>
					<div className='flex gap-2'>
						<p className='flex'>
							{getStarRating(Number(item.rating))}({item.ratingcount})
						</p>
						<p>{`£${item.price}`}</p>
					</div>
				</div>
				<div className='w-1/2'>
					<CartOptions item={item} />
				</div>
			</div>
		</Modal>
	);
}
