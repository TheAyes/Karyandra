<script lang="ts" setup>
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
	getSliceComponentProps<Content.HeroSlice>([
		"slice",
		"index",
		"slices",
		"context"
	])
);
</script>

<template>
	<section
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
		:style="{
			height: slice.primary.height + 'px',
			backgroundImage: `url(${slice.primary.background_image.url})`,
    	}"
	>
		<h1
			:style="{
				fontSize: '2.2rem',
				color: String(slice.primary.text_color),
				fontWeight: '700'
			}"
		>{{ slice.primary.text }}</h1>
	</section>
</template>

<style scoped>
section {
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 60%);
	background-repeat: no-repeat;
	background-position: center;
	/*background-origin: padding-box;*/
	background-size: cover;
	background-blend-mode: darken;
}

</style>