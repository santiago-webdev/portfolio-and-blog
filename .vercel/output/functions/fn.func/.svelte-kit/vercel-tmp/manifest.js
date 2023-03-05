export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","Manrope[wght].woff2","favicon.png","noise.png","reset.css","syntax-highlighting.css"]),
	mimeTypes: {".woff2":"font/woff2",".png":"image/png",".css":"text/css"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.766b131e.js","imports":["_app/immutable/entry/start.766b131e.js","_app/immutable/chunks/index.93f4b5e8.js","_app/immutable/chunks/singletons.062a8cf3.js","_app/immutable/chunks/paths.e87ca418.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.fe3085ff.js","imports":["_app/immutable/entry/app.fe3085ff.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.93f4b5e8.js"],"stylesheets":[],"fonts":[]}},
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
