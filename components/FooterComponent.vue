<script lang="ts" setup>
const prismic = usePrismic();
const img = useImage();

const { data } = useAsyncData("footer-data", async () => {
	const { data: footer } = await prismic.client.getSingle("footer");

	const image = img(footer.background_image.url ?? "", {
		height: footer.background_image.dimensions?.height,
		width: footer.background_image.dimensions?.width
	});

	return { footer, image };
});
const { data: footer } = useLazyAsyncData("footer-image-data", async () => {
	return;
});
</script>

<style>
footer {
	font-size: 1.6rem;
	display: flex;
	align-items: center;
	padding: 0 4rem;
	background-color: rgba(0, 0, 0, 60%);
	background-position: bottom center;
	background-size: cover;

	background-blend-mode: darken;

	p {
		a {
			font-size: 1.2em;
			font-weight: 900;
			color: #ff00f2;
		}
	}
}
</style>

<template>
	<footer
		:style="{
			backgroundImage: `url(${data?.image})`,
			height: data?.footer.background_image.dimensions?.height + 'px'
		}"
		v
	>
		<PrismicRichText :field="data?.footer?.text" />
	</footer>
</template>
