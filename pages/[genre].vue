<script lang="ts" setup>
import { components } from "~/slices";

const prismic = usePrismic();
const route = useRoute();

const { data: page } = useAsyncData(route.params.genre as string, () =>
	prismic.client.getByUID("genre", route.params.genre as string)
);

useHead({
	title: ""
});
</script>

<template>
	<SliceZone :components="components" :slices="page?.data.slices ?? []" wrapper="main" />
</template>
