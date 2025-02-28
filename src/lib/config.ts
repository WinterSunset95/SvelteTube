import type {
  TMDBitem,
  TMDBresult,
  TmdbTv,
  TMDBMovieInfo,
  TmdbTvInfo,
} from "./types";
import {
  type ISearch,
  type IMovieResult,
  type IMovieInfo,
  TvType,
  MediaStatus,
} from "@consumet/extensions";
import { TMDB_API_KEY } from "$env/static/private";

export const appProxy = "https://api.allorigins.win/get?url=";
//export const appProxy = "";
export const movieTrending = `${appProxy}https://api.themoviedb.org/3/trending/movie/day?api_key=${TMDB_API_KEY}`;
export const moviePopular = `${appProxy}https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}`;
export const movieSearch = `${appProxy}https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}%26query=`;
export const movieInfo = (id: string): string =>
  `${appProxy}https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}`;
export const tvTrending = `${appProxy}https://api.themoviedb.org/3/trending/tv/day?api_key=${TMDB_API_KEY}`;
export const tvPopular = `${appProxy}https://api.themoviedb.org/3/tv/popular?api_key=${TMDB_API_KEY}`;
export const tvSearch = `https://api.themoviedb.org/3/search/tv?api_key=${TMDB_API_KEY}&query=`;
export const tvInfo = (id: string): string =>
  `${appProxy}https://api.themoviedb.org/3/tv/${id}?api_key=${TMDB_API_KEY}`;
export const dramaCoolSearch =
  "https://consumet-api-dgfy.vercel.app/movies/dramacool/";
export const dramaCoolInfo =
  "https://consumet-api-dgfy.vercel.app/movies/dramacool/info?id=";
export const dramaCoolEpInfo = (mediaId: string, episodeId: string) =>
  `https://consumet-api-dgfy.vercel.app/movies/dramacool/watch?episodeId=${episodeId}&mediaId=${mediaId}`;

export function tmdbToConsumet(
  content: TMDBresult<TMDBitem>,
): ISearch<IMovieResult> {
  // Will convert TMDBResult<TMDBitem> to ISearch<IMovieResult>
  let data: ISearch<IMovieResult> = {
    results: [],
    totalPages: 0,
    totalResults: 0,
  };

  // Lets make the rawData compatible(?) with data;
  data.totalPages = content.total_pages;
  data.totalResults = content.total_results;
  data.currentPage = content.page;
  data.hasNextPage = content.page < content.total_pages ? true : false;
  content.results.forEach((result: any) => {
    let movie: IMovieResult = {
      id: result.id,
      title: result.title,
      url: undefined,
      image: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      releaseDate: result.release_date,
      type: result.media_type,
    };
    data.results.push(movie);
  });

  return data;
}

export function tmdbTvToConsumet(
  content: TMDBresult<TmdbTv>,
): ISearch<IMovieResult> {
  let data: ISearch<IMovieResult> = {
    results: [],
    totalPages: 0,
    totalResults: 0,
  };

  data.totalPages = content.total_pages;
  data.totalResults = content.total_results;
  data.currentPage = content.page;
  data.hasNextPage = content.page < content.total_pages ? true : false;
  content.results.forEach((result: any) => {
    let movie: IMovieResult = {
      id: result.id,
      title: result.name,
      url: undefined,
      image: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      releaseDate: result.first_air_date,
      type: TvType.TVSERIES,
    };
    data.results.push(movie);
  });

  return data;
}

export function infoTmdbToConsumet(content: TMDBMovieInfo): IMovieInfo {
  // Convert TMDBMovieInfo to IMovieInfo

  let imdbStatus: MediaStatus;
  if (content.status == "Released") {
    imdbStatus = MediaStatus.COMPLETED;
  } else {
    imdbStatus = MediaStatus.UNKNOWN;
  }

  let imdbDuration: string;
  let hours: number = 0,
    minutes: number = 0;
  let runtime = content.runtime;
  hours = Math.floor(runtime / 60);
  minutes = runtime % 60;
  imdbDuration = `${hours}hrs ${minutes}mins`;

  let data: IMovieInfo = {
    id: content.imdb_id,
    title: content.original_title,
    image: `https://image.tmdb.org/t/p/w500${content.poster_path}`,
    releaseDate: content.release_date,
    type: TvType.MOVIE,
    cover: `https://image.tmdb.org/t/p/w500${content.poster_path}`,
    genres: content.genres?.map((tag) => tag.name),
    description: content.overview,
    rating: content.vote_average,
    status: imdbStatus,
    duration: imdbDuration,
    production: content?.production_companies[0]?.name,
  };

  return data;
}

export function infoTmdbTvToConsumet(content: TmdbTvInfo): IMovieInfo {
  // Convert TmdbTvInfo to IMovieInfo

  let imdbStatus: MediaStatus;
  if (content.status == "Released") {
    imdbStatus = MediaStatus.COMPLETED;
  } else {
    imdbStatus = MediaStatus.UNKNOWN;
  }

  let imdbDuration: string;
  let hours: number = 0,
    minutes: number = 0;
  let runtime = content.episode_run_time[0];
  hours = Math.floor(runtime / 60);
  minutes = runtime % 60;
  imdbDuration = `${hours}hrs ${minutes}mins`;

  let data: IMovieInfo = {
    id: content.id.toString(),
    title: content.original_name,
    image: `https://image.tmdb.org/t/p/w500${content.poster_path}`,
    releaseDate: content.first_air_date,
    type: TvType.TVSERIES,
    cover: `https://image.tmdb.org/t/p/w500${content.poster_path}`,
    totalEpisodes: content.number_of_episodes,
    genres: content.genres?.map((tag) => tag.name),
    description: content.overview,
    rating: content.vote_average,
    status: imdbStatus,
    duration: imdbDuration,
    production: content?.production_companies[0]?.name,
  };

  return data;
}
