"use server";
import { kv } from "@vercel/kv";
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
