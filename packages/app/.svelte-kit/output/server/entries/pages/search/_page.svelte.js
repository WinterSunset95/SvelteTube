import { h as head, e as escape_html, b as attr, n as stringify } from "../../../chunks/index.js";
import "clsx";
import { L as List } from "../../../chunks/List.js";
import { N as Navigation } from "../../../chunks/Navigation.js";
function Loading($$renderer) {
  $$renderer.push(`<div class="loading svelte-gftfsn">Loading... Please Wait</div>`);
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    head("e12qt1", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Searching: ${escape_html(data.query)}</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", `Query: ${stringify(data.query)}`)}/>`);
    });
    Navigation($$renderer2);
    $$renderer2.push(`<!----> <h1 class="svelte-e12qt1">Movie results for "${escape_html(data.query)}"</h1> `);
    if (data.movieList) {
      $$renderer2.push("<!--[0-->");
      List($$renderer2, { mediaList: data.movieList });
    } else {
      $$renderer2.push("<!--[-1-->");
      Loading($$renderer2);
    }
    $$renderer2.push(`<!--]--> <h1 class="svelte-e12qt1">TV results for "${escape_html(data.query)}"</h1> `);
    if (data.tvList) {
      $$renderer2.push("<!--[0-->");
      List($$renderer2, { mediaList: data.tvList });
    } else {
      $$renderer2.push("<!--[-1-->");
      Loading($$renderer2);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
export {
  _page as default
};
