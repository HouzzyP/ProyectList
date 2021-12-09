// const URL_API = "https://api.jikan.moe/v3/anime/";

const FilterGamesInfo = async (page) => {
	try {
		const URL_API_DEFAULT = `https://api.jikan.moe/v3/search/anime?q=&order_by=id&sort=asc&page=1`;
		const URL_API_SEARCH = `https://api.jikan.moe/v3/search/anime?q=&order_by=id&sort=asc&page=${page}&limit=10`;

		if (page > 384 || page < 1) {
			const response = await fetch(URL_API_DEFAULT);
			const data = await response.json();
			return data.results;
		}
		const response = await fetch(URL_API_SEARCH);

		const data = await response.json();

		return data.results;
	} catch (err) {}
};

export default FilterGamesInfo;
