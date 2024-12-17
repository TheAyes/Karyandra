<script lang="ts" setup>
import type { GenreDocumentData, SongDocument } from "~/prismicio-types";

const prismic = usePrismic();
const route = useRoute();

const uid = route.params.genre as string;

const { data: page } = useAsyncData(`${route.params.genre as string}-page-data`, () =>
	prismic.client.getByUID("genre", uid)
);

const { data } = useAsyncData(
	`${route.params.genre as string}-song-data`,
	async (): Promise<{
		genre: GenreDocumentData;
		songs: SongDocument[];
	}> => {
		const genre = await prismic.client.getByUID("genre", uid);

		const songs = await prismic.client.getAllByType("song", {
			filters: [prismic.filter.at("my.song.genre_group.genre", genre.id)],

			orderings: {
				field: "my.song.title",
				direction: "asc"
			}
		});

		return { genre: genre.data, songs: songs };
	}
);

useHead({
	title: ""
});
</script>

<template>
	<HeroComponent
		v-if="page?.data.has_hero"
		:text="String(page?.data.name)"
		image-url="'https://images.prismic.io/karyandra/Z1ssl5bqstJ98bgq_Slayanny.jpg?auto=format,compress'"
	/>
	<ul>
		<li v-for="(song, index) in data?.songs">
			<p>"{{ song.data.title }}" - {{ song.data.artist }}</p>
			<hr v-if="index !== (data?.songs.length ?? 1) - 1" />
		</li>
	</ul>
</template>

<style scoped>
ul {
	font-family: Lexend, sans-serif;
	font-weight: 900;
	padding: 0 4rem;
	list-style: none;

	color: #ed8f12;

	li {
		p {
			font-size: 2.6rem;
			padding: 4rem 0;
		}
	}
}
</style>
