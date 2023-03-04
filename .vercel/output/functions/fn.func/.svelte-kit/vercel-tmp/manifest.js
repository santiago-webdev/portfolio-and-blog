export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","Manrope[wght].woff2","favicon.png","noise.png","reset.css","syntax-highlighting.css"]),
	mimeTypes: {".woff2":"font/woff2",".png":"image/png",".css":"text/css"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.484830fc.js","imports":["_app/immutable/entry/start.484830fc.js","_app/immutable/chunks/index.8f151a75.js","_app/immutable/chunks/singletons.6e39b712.js","_app/immutable/chunks/paths.05549c44.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.782bf7f1.js","imports":["_app/immutable/entry/app.782bf7f1.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.8f151a75.js"],"stylesheets":[],"fonts":[]}},
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
