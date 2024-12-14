import { NodePackageImporter } from "sass";
import { repositoryName } from "./slicemachine.config.json";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ["./global.scss"],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {

					api: "modern",
					importers: [new NodePackageImporter()]
				}
			}
		}
	},
	app: {
		head: {
			title: "Karyandra",
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

	modules: ["@nuxtjs/prismic", "@nuxthub/core", "@nuxt/image", "@nuxt/fonts"],

	fonts: {
		defaults: {
			weights: [
				200, 400, 700
			]
		}
	},

	typescript: {
		typeCheck: true
	},

	prismic: {
		endpoint: repositoryName,
		preview: "/preview",
		clientConfig: {
			routes: [
				{
					type: "home",
					uid: "*",
					path: "/"
				},
				{
					type: "genre",
					path: "/genre/:uid"
				}
			]
		}
	}
});