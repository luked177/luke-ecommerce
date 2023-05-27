"use server";
// import { db } from "@vercel/postgres";

export async function postReview(review, product_id) {
	try {
		console.log(review);
		console.log(product_id);
		// await db.sql`INSERT INTO reviews (product_id, reviewer_name, review_text, rating, review_date)
		// VALUES
		//     (${product_id}, 'Luke Dore`,
		// 	`${review.reviewText}`,
		// 	`${review.rating}`,
		// 	`${new Date()}::DATE);`;
	} catch (error) {
		console.log(error);
	}
}
