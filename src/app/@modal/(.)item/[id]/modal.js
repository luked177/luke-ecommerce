"use client";
import { Dialog, DialogContent } from "@/components/primitives/Dialog";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";

export default function Modal({ children }) {
	const router = useRouter();

	const onDismiss = useCallback(() => {
		router.back();
	}, [router]);

	return (
		<Dialog defaultOpen onOpenChange={() => onDismiss()}>
			<DialogContent>{children}</DialogContent>
		</Dialog>
	);
}
