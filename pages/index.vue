<script lang="ts" setup>
import { components } from "~/slices";

const prismic = usePrismic();
const { data: page } = useAsyncData("index", () =>
	prismic.client.getSingle("home", { fetchLinks: ["genre.name", "genre.cover_image"], dedupe: "defer" })
);

useHead({
	title: page.value?.data.meta_title
});
</script>

<template>
	<SliceZone :components="components" :slices="page?.data.slices ?? []" wrapper="main" />
</template>
