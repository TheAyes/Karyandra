<script lang="ts" setup>
import { components } from "~/slices";

const prismic = usePrismic();
const route = useRoute();

const { data: page } = useAsyncData(route.params.genre as string, () =>
	prismic.client.getByUID("genre", route.params.genre as string)
);

const { data: songs } = useAsyncData(route.params.genre as string, () =>
	prismic.client.getAllByType("song", {
		filters: [prismic.filter.at("my.song.genre", route.params.genre)]
	})
);

useHead({
	title: ""
});
</script>

<template>
	<ul>
		<li v-for="song in songs">
			{{ song.data.song_title }}
		</li>
	</ul>
	<SliceZone :components="components" :slices="page?.data.slices ?? []" wrapper="main" />
</template>
