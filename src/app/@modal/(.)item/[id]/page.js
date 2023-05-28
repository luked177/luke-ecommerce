import { db } from "@vercel/postgres";
import React from "react";
import Modal from "./modal";
import Image from "next/image";
import { getStarRating } from "@/utils/starRating";
import CartOptions from "@/components/shared/CartOptions";
import { auth } from "@clerk/nextjs";

export default async function Page({ params }) {
	const client = await db.connect();
	const user = await auth();
	const product = await client.sql`SELECT * FROM products WHERE id = ${params.id}`;
	const item = product.rows[0];
	const { rows: reviews } = await client.sql`SELECT * FROM reviews WHERE product_id = ${params.id}`;
	const averageRating = reviews.reduce((sum, product) => sum + parseFloat(product.rating), 0) / reviews.length;
	return (
		<Modal>
			<h1>{item.title}</h1>
			<div className='flex'>
				<div className='w-1/2'>
					<div style={{ width: "180px", height: "180px", position: "relative" }}>
						<Image key={item.id} sizes='100%' className='' src={item.image} alt='Next.js Logo' fill />
					</div>
					<div className='flex gap-2'>
						{!isNaN(averageRating) ? (
							<p className='flex'>
								{getStarRating(averageRating.toFixed(2))}({reviews.length})
							</p>
						) : (
							<p>No reviews yet!</p>
						)}
						<p>{`£${item.price}`}</p>
					</div>
				</div>
				<div className='w-1/2'>
					<CartOptions userId={user?.userId} item={item} />
				</div>
			</div>
		</Modal>
	);
}
