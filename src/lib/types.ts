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
	episode: {
		sources: [
			{
				url: string;
				isM3U8: boolean;
				quality: string;
			}
		];
		download: string;
	};
	servers: [
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

