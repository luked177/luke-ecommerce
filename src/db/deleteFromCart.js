"use server";
import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";

export async function deleteFromCart(item, userId) {
	const cart = await kv.get(`${userId}_cart`);
	try {
		if (cart !== null) {
			const data = cart.filter((product) => product.cartId !== item.cartId);
			await kv.set(`${userId}_cart`, data);
			revalidatePath("/cart");
			return;
		}
	} catch (e) {
		console.log(e);
	}
}
