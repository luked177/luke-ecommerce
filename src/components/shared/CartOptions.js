"use client";

import React, { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../primitives/Select";
import { Button } from "../primitives/Button";
import { ShoppingBag } from "lucide-react";
import { addToCart } from "@/db/addToCart";

export default function CartOptions({ item }) {
	const [itemOptions, setItemOptions] = useState({ ...item });
	return (
		<div className='flex flex-col gap-4 justify-center'>
			<Select onValueChange={(e) => setItemOptions({ ...itemOptions, size: e })}>
				<SelectTrigger className='w-full'>
					<SelectValue placeholder='Size' />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value={"XS"}>XS</SelectItem>
					<SelectItem value={"S"}>S</SelectItem>
					<SelectItem value={"M"}>M</SelectItem>
					<SelectItem value={"L"}>L</SelectItem>
					<SelectItem value={"XL"}>XL</SelectItem>
				</SelectContent>
			</Select>
			<Select onValueChange={(e) => setItemOptions({ ...itemOptions, colour: e })}>
				<SelectTrigger className='w-full'>
					<SelectValue placeholder='Colour' />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value={"Black"}>Black</SelectItem>
					<SelectItem value={"White"}>White</SelectItem>
					<SelectItem value={"Green"}>Green</SelectItem>
					<SelectItem value={"Blue"}>Blue</SelectItem>
					<SelectItem value={"Red"}>Red</SelectItem>
				</SelectContent>
			</Select>
			<Button onClick={() => addToCart(itemOptions)}>
				<ShoppingBag /> Add to Cart
			</Button>
		</div>
	);
}
