import { t as tmdbProvider } from "../../../../../../chunks/providers.js";
import { json } from "@sveltejs/kit";
const GET = ({ url }) => {
  const id = url.searchParams.get("id");
  if (id == "" || !id) {
    console.error("id is undefined");
    const error2 = {
      peek: false,
      boo: "id is undefined"
    };
    return json(error2);
  }
  const season = Number(url.searchParams.get("season"));
  const episode = Number(url.searchParams.get("episode"));
  if (season && episode) {
    const data = tmdbProvider.getTvEmbeds(id, season, episode);
    return json(data);
  }
  return json(tmdbProvider.getMovieEmbeds(id));
};
export {
  GET
};
