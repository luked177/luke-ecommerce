import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../primitives/Card";
import Image from "next/image";
import { getStarRating } from "@/utils/starRating";
import Link from "next/link";

export default async function ItemCard({ item, reviews }) {
	const averageRating = reviews.reduce((sum, product) => sum + parseFloat(product.rating), 0) / reviews.length;
	return (
		<div key={item.id}>
			<Link href={`/item/${item.id}`}>
				<Card className='w-[400px] h-[400px]'>
					<CardHeader className='flex items-center'>
						<div style={{ width: "180px", height: "180px", position: "relative" }}>
							<Image key={item.id} className='' sizes='100%' src={item.image} alt='Next.js Logo' fill />
						</div>
					</CardHeader>
					<CardContent>
						<CardTitle className='h-[36px] line-clamp-2'>{item.title}</CardTitle>
						<CardDescription className='h-[80px] line-clamp-4'>{item.description}</CardDescription>
					</CardContent>
					<CardFooter className='flex justify-between'>
						<div>
							{!isNaN(averageRating) ? (
								<p className='flex'>
									{getStarRating(averageRating.toFixed(2))}({reviews.length})
								</p>
							) : (
								<p>No reviews yet!</p>
							)}
						</div>
						<p>{`£${item.price}`}</p>
					</CardFooter>
				</Card>
			</Link>
		</div>
	);
}
