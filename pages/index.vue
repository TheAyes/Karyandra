<script lang="ts" setup>
import { components } from "~/slices";

const prismic = usePrismic();
const { data: page } = useAsyncData("index", () =>
	prismic.client.getSingle("home")
);

useHead({
	title: page.value?.data.meta_title
});
</script>

<template>
	<SliceZone
		:components="components"
		:slices="page?.data.slices ?? []"
		wrapper="main"
	/>
</template>

<style>
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
</style>