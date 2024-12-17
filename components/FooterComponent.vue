<script lang="ts" setup>
const prismic = usePrismic();

const { data: footer } = useAsyncData("footer-data", () => prismic.client.getSingle("footer"));
</script>

<style>
footer {
	font-size: 1.6rem;
	display: flex;
	align-items: center;
	height: 100px;
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
			backgroundImage: `url(${footer.data?.background_image.url})`
		}"
	>
		<PrismicRichText :field="footer.data.text" />
	</footer>
</template>
