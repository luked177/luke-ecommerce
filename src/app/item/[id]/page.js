import CartOptions from "@/components/shared/CartOptions";
import { getStarRating } from "@/utils/starRating";
import { db } from "@vercel/postgres";
import Image from "next/image";
import React from "react";

export default async function Page({ params }) {
	const client = await db.connect();
	const products = await client.sql`SELECT * FROM products WHERE id = ${params.id}`;
	const item = products.rows[0];
	return (
		<div className='w-full flex justify-center flex-col p-4'>
			<h1 className='font-semibold'>{item.title}</h1>
			<div className='flex flex-col justify-center'>
				<div className='flex flex-col justify-center items-center'>
					<div style={{ width: "180px", height: "180px", position: "relative" }}>
						<Image key={item.id} className='' src={item.image} alt='Next.js Logo' fill />
					</div>
					<div className='flex gap-2'>
						<p className='flex'>
							{getStarRating(Number(item.rating))}({item.ratingcount})
						</p>
						<p>{`£${item.price}`}</p>
					</div>
				</div>
				<div>
					<CartOptions item={item} />
				</div>
			</div>
		</div>
	);
}
