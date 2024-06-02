export type AnimeData = {
	currentPage: number;
	hasNextPage: boolean;
	results: [
		{
			id: string;
			title: string;
			image: string;
			releaseDate: string;
			subOrDub: string;
		}
	];
}

export type AnimeDetails = {
	id: string;
	title: string;
	genres: string[];
	totalEpisodes: number;
	image: string;
	releaseDate: string;
	description: string;
	subOrDub: string;
	type: string;
	status: string;
	otherName: string;
	episodes: [
	  {
		  id: string;
		  number: number;
	  }
	]
}

export type AnimeEpisode = {
	sources: [
		{
			url: string;
			isM3U8: boolean;
			quality: string;
		}
	];
	download: string;
}

export type GlobalChat = {
	name: string;
	message: string;
}

export type RoomData = {
	animeId: string;
	episodeId: string;
	currentTime: number;
	status: string;
}

export interface TMDBitem {
	backdrop_path: string;
	id: string;
	original_title: string;
	overview: string;
	poster_path: string;
	media_type: string;
	adult: boolean;
	title: string;
	original_language: string;
	genre_ids: number[];
	popularity: number;
	release_date: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export interface TMDBresult<T> {
	page: number;
	results: T[];
	total_pages: number;
	total_results: number;
}

export interface TMDBMovieInfo {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: {
		id: string;
		name: string;
		poster_path: string;
		backdrop_path: string;
	};
	budget: string;
	genres: [
		{
			id: number;
			name: string;
		}
	];
	homepage: string;
	id: number | string;
	imdb_id: string;
	origin_country: [string];
	original_language: string;
	original_title: string;
	overview: string;
	popularity: string;
	poster_path: string;
	production_companies: [{
		id: number;
		logo_path: string;
		name: string;
		origin_country: string;
	}];
	production_countries: [{
		name: string;
	}];
	release_date: string;
	revenue: number;
	runtime: number;
	status: string;
	vote_average: number;
}
