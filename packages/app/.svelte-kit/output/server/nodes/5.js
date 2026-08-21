import * as server from '../entries/pages/home/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/home/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.BbQvV6_g.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/4gSVB85y.js","_app/immutable/chunks/Dn9GWRZg.js","_app/immutable/chunks/3E1wxBVA.js","_app/immutable/chunks/DZECM9XR.js","_app/immutable/chunks/BoqGMRGr.js","_app/immutable/chunks/B-1-Uuoj.js","_app/immutable/chunks/B4iVqIzM.js","_app/immutable/chunks/BDFfJYl9.js","_app/immutable/chunks/D6fY3jvx.js","_app/immutable/chunks/DGkOPpSd.js","_app/immutable/chunks/DZ9u2lHs.js","_app/immutable/chunks/oHAZkc1H.js","_app/immutable/chunks/CGzg3m6w.js","_app/immutable/chunks/CdPzTzg7.js"];
export const stylesheets = ["_app/immutable/assets/Navigation.CdXz5Cec.css"];
export const fonts = [];
