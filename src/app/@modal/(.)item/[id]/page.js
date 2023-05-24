import { Dialog, DialogContent } from "@/components/Dialog";
import ItemCard from "@/components/ItemCard";
import React from "react";

export default async function Page({ params }) {
	const data = await fetch(`https://fakestoreapi.com/products/${params.id}`).then((res) => res.json());
	return (
		<div>
			<Dialog defaultOpen>
				<DialogContent>
					<ItemCard item={data} />
				</DialogContent>
			</Dialog>
		</div>
	);
}
