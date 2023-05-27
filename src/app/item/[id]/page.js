import { Card, CardContent, CardTitle } from "@/components/primitives/Card";
import CartOptions from "@/components/shared/CartOptions";
import { getStarRating } from "@/utils/starRating";
import { db } from "@vercel/postgres";
import dayjs from "dayjs";
import Image from "next/image";
import React from "react";
import AddReviewInput from "../../../components/shared/addReviewInput";
import { Keyboard } from "lucide-react";

export default async function Page({ params }) {
	const client = await db.connect();
	const products = await client.sql`SELECT * FROM products WHERE id = ${params.id}`;
	const item = products.rows[0];
	const { rows: reviews, rowCount: reviewsLength } = await client.sql`SELECT * FROM reviews WHERE product_id = ${params.id} ORDER BY review_date DESC`;

	return (
		<div className='w-full flex justify-center flex-col p-4'>
			<h1 className='font-semibold'>{item.title}</h1>
			<p>{`£${item.price}`}</p>
			<div className='flex flex-col justify-center'>
				<div className='flex flex-col justify-center items-center mb-4'>
					<div style={{ width: "180px", height: "180px", position: "relative" }}>
						<Image key={item.id} sizes='100%' className='' src={item.image} alt='Next.js Logo' fill />
					</div>
				</div>
				<CartOptions item={item} />
			</div>
			<div className='flex flex-col gap-2 mt-4'>
				<AddReviewInput item={item} />
				{reviewsLength > 0 ? (
					reviews.map((review, i) => (
						<Card key={i} className='p-4'>
							<CardTitle>
								<div className='flex w-full justify-between'>
									<p>{review.reviewer_name}</p>
									<p>{dayjs(review.review_date).locale("en").format("DD MMM YYYY")}</p>
								</div>
							</CardTitle>
							<CardContent className='p-0'>
								<p>{review.review_text}</p>
								<p>{getStarRating(review.rating)}</p>
							</CardContent>
						</Card>
					))
				) : (
					<div className='flex w-full gap-4 justify-center mt-4'>
						<Keyboard />
						<p>No reviews yet, be the first to leave one!</p>
					</div>
				)}
			</div>
		</div>
	);
}
