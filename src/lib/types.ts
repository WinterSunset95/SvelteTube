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
		} | undefined
	];
	download: string;
}

export type AnimeEpisodev2 = {
	[
		{
			name: string;
			url: string;
		}
	]
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

export interface TmdbTv {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	origin_country: string[];
	original_language: string;
	original_name: string;
	overview: string;
	popularity: number;
	poster_path: string;
	first_air_date: string;
	name: string;
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

export interface TmdbTvInfo {
	adult: boolean;
	backdrop_path: string;
	created_by: [{
		id: number;
		credit_id: string;
		name: string;
	}];
	episode_run_time: number[];
	first_air_date: string;
	genres: [{
		id: number;
		name: string;
	}];
	homepage: string;
	id: number;
	in_production: boolean;
	languages: [string];
	last_air_date: string;
	last_episode_to_air: {
		id: number;
		overview: string;
		name: string;
		vote_average: number;
		vote_count: number;
		air_date: string;
		episode_number: number;
		episode_type: string;
		production_code: string;
		runtime: number;
		season_number: number;
		show_id: number;
		still_path: string;
	};
	name: string;
	next_episode_to_air: {
		id: number;
		overview: string;
		name: string;
		vote_average: number;
		vote_count: number;
		air_date: string;
		episode_number: number;
		episode_type: string;
		production_code: string;
		runtime: number;
		season_number: number;
		show_id: number;
		still_path: string;
	};
	networks: [{
		name: string;
		id: number;
		logo_path: string;
		origin_country: string;
	}];
	number_of_episodes: number;
	number_of_seasons: number;
	origin_country: [string];
	original_language: string;
	original_name: string;
	overview: string;
	popularity: number;
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
	seasons: [{
		air_date: string;
		episode_count: number;
		id: number;
		name: string;
		overview: string;
		poster_path: string;
		season_number: number;
	}];
	spoken_languages: [{
		english_name: string;
		iso_639_1: string;
		name: string;
	}];
	status: string;
	tagline: string;
	type: string;
	vote_average: number;
	vote_count: number;
}
