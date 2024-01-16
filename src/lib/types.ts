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
