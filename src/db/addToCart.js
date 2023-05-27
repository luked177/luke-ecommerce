"use server";
import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";

export async function addToCart(item) {
	const cart = await kv.get("cart");
	try {
		if (cart !== null) {
			const data = [...cart, item];
			await kv.set("cart", data);
			revalidatePath("/");
			revalidatePath("/cart");
			revalidatePath("/item/[id]");
			return;
		}

		await kv.set("cart", [item]);
	} catch (e) {
		console.log(e);
	}
}
