"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";

export const Modal = ({ children }) => {
	const router = useRouter();

	const handleOnOpenChange = (open) => {
		if (!open) {
			router.back();
		}
	};

	return (
		<Dialog.Root open onOpenChange={handleOnOpenChange}>
			<Dialog.Portal>
				<Dialog.Overlay />

				<Dialog.DialogContent>{children}</Dialog.DialogContent>
			</Dialog.Portal>
		</Dialog.Root>
	);
};
