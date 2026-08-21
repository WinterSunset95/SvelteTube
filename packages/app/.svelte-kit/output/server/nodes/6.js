

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/rooms/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.Be-zveRO.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/DZECM9XR.js","_app/immutable/chunks/4gSVB85y.js"];
export const stylesheets = ["_app/immutable/assets/6.LUcsKFrC.css"];
export const fonts = [];
