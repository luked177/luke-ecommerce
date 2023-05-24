import ItemCard from "@/components/ItemCard";
import React from "react";

export default async function Page({ params }) {
	const data = await fetch(`https://fakestoreapi.com/products/${params.id}`).then((res) => res.json());
	return <ItemCard item={data} />;
}
