export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.c566e389.js","imports":["_app/immutable/entry/start.c566e389.js","_app/immutable/chunks/index.847936d9.js","_app/immutable/chunks/singletons.40f6bf14.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.dd6edae8.js","imports":["_app/immutable/entry/app.dd6edae8.js","_app/immutable/chunks/index.847936d9.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
