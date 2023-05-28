import { Button } from "@/components/primitives/Button";
import { Card, CardTitle } from "@/components/primitives/Card";
import DeleteItemButton from "@/components/shared/DeleteItemButton";
import { auth } from "@clerk/nextjs";
import { kv } from "@vercel/kv";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Page() {
	const user = await auth();
	const cart = await kv.get(`${user?.userId}_cart`);
	const totalPrice = cart.reduce((sum, product) => sum + parseFloat(product.price), 0);

	const EmptyCartMessage = () => {
		return (
			<div className='flex flex-col justify-center items-center h-[calc(100%-64px)] gap-4'>
				<ShoppingBag />
				<h1>You don{`'`}t have any items in your cart yet!</h1>
				<Link href={"/"}>
					<Button>View items</Button>
				</Link>
			</div>
		);
	};

	if (cart.length === 0 || cart === null) return <EmptyCartMessage />;
	return (
		<div className='px-4'>
			<h1>Your Cart</h1>
			<p className='mb-4'>Review the items in your cart</p>
			<div className='flex flex-col gap-4'>
				{cart.map((item) => (
					<>
						<Card className='p-4 flex gap-4'>
							<div style={{ width: "90px", height: "90px", position: "relative" }}>
								<Image key={item.id} sizes='100%' className='' src={item.image} alt='Next.js Logo' fill />
							</div>
							<div className='w-full flex flex-col justify-between'>
								<CardTitle className='flex justify-between items-center w-full'>
									{item.title} <DeleteItemButton userId={user?.userId} item={item} />
								</CardTitle>
								<div className='flex gap-4'>
									<p>Size:{item.size}</p>
									<p>{item.colour}</p>
									<p>£{item.price}</p>
								</div>
							</div>
						</Card>
					</>
				))}
				<h1>Total Price: £{totalPrice.toFixed(2)}</h1>
			</div>
		</div>
	);
}
