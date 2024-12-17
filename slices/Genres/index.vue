<script lang="ts" setup>
import { type Content } from "@prismicio/client";
import type { GenreDocument } from "~/prismicio-types";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.GenreBlockSlice>(["slice", "index", "slices", "context"]));

const prismic = usePrismic();

</script>

<template>
	<section
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
	>
		<h2>Genres</h2>
		<nav>
			<NuxtLink
				v-for="genre in slice.primary.genres"
				:to="{name: 'genre', params: {genre: (genre.genre as unknown as GenreDocument).uid}}"
				class="genre-tile"
			>
				<figure
					:style="{
						backgroundImage: `url(${(genre.genre as unknown as GenreDocument).data.cover_image.url})`
					}"
				>
					<figcaption>
						{{ (genre.genre as unknown as GenreDocument).data.name }}
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
		font-weight: 700;
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
			display: flex;
			align-items: stretch;
			flex-direction: column;
			justify-content: flex-end;
			width: 250px;
			height: auto;
			transition: transform 200ms ease,
			box-shadow 200ms ease;
			text-align: center;
			background-color: rgba(255, 255, 255, 5%);
			background-position: center;
			background-size: cover;

			$shadowColor: #00000055;
			box-shadow: 0 0 4px $shadowColor;

			background-blend-mode: lighten;

			aspect-ratio: 1/1;

			&:hover {
				transform: scale(110%) translateY(-10px);
				box-shadow: 0 10px 14px $shadowColor;
			}

			& > figure {
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				height: 100%;
				background-position: center;
				background-size: cover;

				figcaption {
					font-size: 2rem;
					font-weight: 700;
					padding: 8px;
					background-color: rgba(0, 0, 0, 60%);
				}
			}
		}
	}
}
</style>
