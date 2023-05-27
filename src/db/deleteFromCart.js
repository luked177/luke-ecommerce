"use server";
import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";

export async function deleteFromCart(item) {
	const cart = await kv.get("cart");
	try {
		if (cart !== null) {
			const data = cart.filter((product) => product.cartId !== item.cartId);
			await kv.set("cart", data);
			revalidatePath("/cart");
			return;
		}
	} catch (e) {
		console.log(e);
	}
}
