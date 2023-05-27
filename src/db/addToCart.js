"use server";
import { kv } from "@vercel/kv";
import { db } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function addToCart(item) {
	const cart = await kv.get("cart");
	const itemWithGuid = { ...item, cartId: crypto.randomUUID() };
	try {
		if (cart !== null) {
			const data = [...cart, itemWithGuid];
			await kv.set("cart", data);
			revalidatePath("/");
			revalidatePath("/cart");
			revalidatePath("/item/[id]");
			return;
		}

		await kv.set("cart", [itemWithGuid]);
	} catch (e) {
		console.log(e);
	}
}

export async function addReview(review, product_id) {
	const client = await db.connect();
	try {
		const text = `INSERT INTO reviews (product_id, reviewer_name, review_text, rating, review_date) VALUES ($1, $2, $3, $4, $5)`;
		const values = [product_id, "Luke Dore", review.reviewText, review.rating, new Date()];
		await client.query(text, values);
		revalidatePath("/item/[id]");
		revalidatePath("/");
	} catch (error) {
		console.log(error);
	}
}
