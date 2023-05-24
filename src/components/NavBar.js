"use client";

import React from "react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "./NavigationMenu";
import Link from "next/link";

export default function NavBar({ categories }) {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<Link href='/' legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Categories</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className='w-[80vw] grid grid-cols-2 grid-rows-2'>
							{categories.map((category, i) => {
								return (
									<Link key={i} href={`/category/${category}`} legacyBehavior passHref>
										<NavigationMenuLink className={navigationMenuTriggerStyle()}>
											<span className='capitalize'>{category} </span>
										</NavigationMenuLink>
									</Link>
								);
							})}
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href='/faqs' legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>FAQs</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
