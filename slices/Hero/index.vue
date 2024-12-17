<script lang="ts" setup>
import { type Content } from "@prismicio/client";

const prismic = usePrismic();
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
	<HeroComponent
		:height="slice.variation === 'default' ? Number(slice.primary.height) : 350"
		:image-url="
			slice.variation === 'default'
				? (slice.primary.background_image.url as string | undefined)
				: 'https://images.prismic.io/karyandra/Z1ssl5bqstJ98bgq_Slayanny.jpg?auto=format,compress'
		"
		:text="slice.primary.text ?? ''"
		:text-color="slice.variation === 'default' ?  String(slice.primary.text_color) : '#ed8f12'"
	/>
</template>