"use client";
import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/primitives/Select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SortOptions } from "@/class/SortOptions";

export default function SortSelect() {
	const { replace } = useRouter();
	const pathname = usePathname();
	const params = useSearchParams().get("sort");

	return (
		<Select
			onValueChange={(e) => {
				const params = new URLSearchParams(window.location.search);
				e !== SortOptions.Default ? params.set("sort", e) : params.delete("sort");
				replace(`${pathname}?${params.toString()}`);
			}}
			defaultValue={params ?? SortOptions.Default}
		>
			<SelectTrigger className='w-[180px]'>
				<SelectValue placeholder='Sort' />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value={SortOptions.Default}>Default</SelectItem>
				<SelectItem value={SortOptions.RatingASC}>Rating ASC</SelectItem>
				<SelectItem value={SortOptions.RatingDESC}>Rating DESC</SelectItem>
				<SelectItem value={SortOptions.PriceASC}>Price ASC</SelectItem>
				<SelectItem value={SortOptions.PriceDESC}>Price DESC</SelectItem>
			</SelectContent>
		</Select>
	);
}
