export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","Manrope[wght].woff2","favicon.png","noise.png","reset.css","syntax-highlighting.css"]),
	mimeTypes: {".woff2":"font/woff2",".png":"image/png",".css":"text/css"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.2ac4b225.js","imports":["_app/immutable/entry/start.2ac4b225.js","_app/immutable/chunks/index.8f151a75.js","_app/immutable/chunks/singletons.a7b5791f.js","_app/immutable/chunks/paths.a7796b81.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.0e0418da.js","imports":["_app/immutable/entry/app.0e0418da.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.8f151a75.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
