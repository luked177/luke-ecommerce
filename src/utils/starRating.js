export function getStarRating(rating) {
	const fullStars = Math.floor(rating);

	let starRating = "";

	for (let i = 0; i < fullStars; i++) {
		starRating += "★";
	}

	const emptyStars = 5 - fullStars;
	for (let i = 0; i < emptyStars; i++) {
		starRating += "☆";
	}
	return starRating;
}
