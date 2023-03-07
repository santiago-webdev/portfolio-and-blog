export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","Manrope[wght].woff2","favicon.png","noise.png","reset.css","syntax-highlighting.css"]),
	mimeTypes: {".woff2":"font/woff2",".png":"image/png",".css":"text/css"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.5dfbe2a7.js","imports":["_app/immutable/entry/start.5dfbe2a7.js","_app/immutable/chunks/index.93f4b5e8.js","_app/immutable/chunks/singletons.2be36d07.js","_app/immutable/chunks/paths.ed0e7834.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.57bd1e44.js","imports":["_app/immutable/entry/app.57bd1e44.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.93f4b5e8.js"],"stylesheets":[],"fonts":[]}},
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
