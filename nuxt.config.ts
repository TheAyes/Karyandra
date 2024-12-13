import { apiEndpoint, repositoryName } from "./slicemachine.config.json";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	app: {
		head: {
			title: "Prismic + Nuxt Minimal Starter",
			htmlAttrs: {
				lang: "en"
			},
			meta: [
				{ charset: "utf-8" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{ hid: "description", name: "description", content: "" },
				{ name: "format-detection", content: "telephone=no" }
			],
			link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
			script: [
				{
					async: true,
					defer: true,
					src: "https://static.cdn.prismic.io/prismic.js?new=true&repo=karyandra"
				}

			]
		}
	},

	modules: ["@nuxtjs/prismic", "@nuxthub/core"],

	prismic: {
		endpoint: apiEndpoint ?? repositoryName,
		preview: "/api/preview",
		clientConfig: {
			routes: [
				{
					type: "home",
					uid: "*",
					path: "/"
				}
			]
		}
	}
});