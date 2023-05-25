export async function populateItems(client, test) {
	try {
		await client.sql`CREATE TABLE products (
					id VARCHAR(255),
		  title VARCHAR(255),
		  price DECIMAL(10, 2),
		  description TEXT,
		  category VARCHAR(255),
		  image VARCHAR(255),
		  rating DECIMAL(3, 2),
		  ratingCount INT
				  );`;

		for (const item of test) {
			await client.sql`
					  INSERT INTO products (id, title, price, description, category, image, rating, ratingCount)
					  VALUES (${item.id}, ${item.title}, ${item.price}, ${item.description}, ${item.category}, ${item.image}, ${item.rating.rate}, ${item.rating.count});
					`;
		}
	} catch (e) {
		console.log(e);
	}
}
