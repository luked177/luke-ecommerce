"use client";
import { Dialog, DialogContent } from "@/components/primitives/Dialog";
import ItemCard from "@/components/shared/ItemCard";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";

export default function Modal({ item }) {
	const router = useRouter();

	const onDismiss = useCallback(() => {
		router.back();
	}, [router]);

	return (
		<Dialog defaultOpen onOpenChange={() => onDismiss()}>
			<DialogContent>
				<ItemCard item={item} />
			</DialogContent>
		</Dialog>
	);
}
