<script lang="ts" setup>
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.GenreBlockSlice>(["slice", "index", "slices", "context"]));

const prismic = usePrismic();
const { data: genrePages } = useAsyncData("genres", () => prismic.client.getAllByType("genre"));
</script>

<template>
	<section>
		<h2>Genres</h2>
		<nav>
			<NuxtLink
				v-for="item in genrePages"
				:to="{ name: 'genre', params: { genre: item.uid } }"
				class="genre-tile"
			>
				<figure
					:data-slice-type="slice.slice_type"
					:data-slice-variation="slice.variation"
					:style="{
						backgroundImage: `url(${item.data.cover_image.url})`
					}"
				>
					<figcaption>
						{{ item.data.name }}
					</figcaption>
				</figure>
			</NuxtLink>
		</nav>
	</section>
</template>

<style lang="scss" scoped>
section {
	padding: 4rem;

	h2 {
		font-size: 8rem;
		text-align: center;
	}

	nav {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		justify-content: center;
		max-width: clamp(260px, 100%, 1200px);
		margin: 0 auto;
		padding: 4rem;
		gap: 4rem;

		.genre-tile {
			align-content: center;
			width: 200px;
			height: auto;
			text-align: center;
			background-color: rgba(255, 255, 255, 12%);
			background-position: center;
			background-size: cover;
			background-blend-mode: lighten;

			aspect-ratio: 1/1;
		}
	}
}
</style>
