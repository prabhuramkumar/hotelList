export const sortByLowPrice = (a, b) => {
	return parseFloat(a.offer.displayPrice.amount) > parseFloat(b.offer.displayPrice.amount) ? 1 : -1;
};

export const sortByHighPrice = (a, b) => {
	return parseFloat(a.offer.displayPrice.amount) < parseFloat(b.offer.displayPrice.amount) ? 1 : -1;
};