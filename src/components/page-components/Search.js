"use client";
import React, { useEffect, useRef, useState } from "react";
import { Input } from "../primitives/Input";
import { SearchIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

export default function Search() {
	const [showInput, setShowInput] = useState(false);
	const ref = useRef(null);
	const { replace } = useRouter();
	const pathname = usePathname();

	function useOutsideAlerter(ref, callback) {
		useEffect(() => {
			function handleClickOutside(event) {
				if (ref.current && !ref.current.contains(event.target)) {
					callback();
				}
			}
			document.addEventListener("mousedown", handleClickOutside);
			return () => {
				document.removeEventListener("mousedown", handleClickOutside);
			};
		}, [ref, callback]);
	}

	useOutsideAlerter(ref, () => setShowInput(false));

	return (
		<div className='flex flex-row-reverse'>
			<AnimatePresence>
				{!showInput && (
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
						<SearchIcon onClick={() => setShowInput(true)} />
					</motion.div>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{showInput && (
					<motion.div ref={ref} initial={{ width: 0 }} animate={{ width: "150px" }} exit={{ width: 0 }}>
						<Input
							onEnterPress={(e) => {
								const params = new URLSearchParams(window.location.search);
								params.set("search", e);
								replace(`${pathname}?${params.toString()}`);
								setShowInput(false);
							}}
							className='h-4'
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
