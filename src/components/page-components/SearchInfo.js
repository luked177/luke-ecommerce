"use client";
import React from "react";
import { Button } from "../primitives/Button";
import { usePathname, useRouter } from "next/navigation";

export default function SearchInfo({ searchTerm }) {
	const { replace } = useRouter();
	const pathname = usePathname();

	return (
		<div className='flex items-center gap-4'>
			<p>Searching for: {searchTerm}</p>
			<Button
				onClick={() => {
					const params = new URLSearchParams(window.location.search);
					params.delete("search");
					replace(`${pathname}?${params.toString()}`);
				}}
			>
				Clear
			</Button>
		</div>
	);
}
