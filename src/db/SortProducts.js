import { db } from "@vercel/postgres";

const { SortOptions } = require("@/class/SortOptions");

export async function sortProducts(searchParam) {
	const client = await db.connect();
	switch (searchParam) {
		case SortOptions.PriceASC:
			return await client.sql`SELECT * FROM products ORDER BY price ASC`;
		case SortOptions.PriceDESC:
			return await client.sql`SELECT * FROM products ORDER BY price DESC`;
		case SortOptions.RatingASC:
			return await client.sql`SELECT * FROM products ORDER BY rating ASC`;
		case SortOptions.RatingDESC:
			return await client.sql`SELECT * FROM products ORDER BY rating DESC`;
		default:
			return await client.sql`SELECT * FROM products`;
	}
}

export function getOrderingSQL(searchParam) {
	switch (searchParam) {
		case SortOptions.PriceASC:
			return " ORDER BY price ASC";
		case SortOptions.PriceDESC:
			return " ORDER BY price DESC";
		case SortOptions.RatingASC:
			return " ORDER BY rating ASC";
		case SortOptions.RatingDESC:
			return " ORDER BY rating DESC";
		default:
			return "";
	}
}
