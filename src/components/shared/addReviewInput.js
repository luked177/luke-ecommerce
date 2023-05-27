"use client";

import { Button } from "@/components/primitives/Button";
import { Card } from "@/components/primitives/Card";
import { Input } from "@/components/primitives/Input";
import { Slider } from "@/components/primitives/Slider";
import { addReview } from "@/db/addToCart";
import React, { useState } from "react";

export default function AddReviewInput({ item }) {
	const [review, setReview] = useState({ reviewText: "", rating: 0 });
	return (
		<Card className='p-4 flex flex-col gap-4'>
			<Input className='border-none' placeholder='Add your review here' onChange={(e) => setReview({ ...review, reviewText: e.target.value })} />
			<div className='flex w-full justify-between'>
				<div className='flex flex-col gap-4'>
					<Slider onChange={(e) => setReview({ ...review, rating: e[0] })} className='w-40' defaultValue={[0]} max={5} step={0.5} />
					<p>{review.rating}/5 Stars</p>
				</div>
				<Button onClick={() => addReview(review, item.id)}>Post</Button>
			</div>
		</Card>
	);
}
