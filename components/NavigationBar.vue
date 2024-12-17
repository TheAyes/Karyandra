<script lang="ts" setup>
const prismic = usePrismic();
const { data: navigation } = useAsyncData("navigation-data", () => prismic.client.getSingle("navigation"));
</script>

<style scoped>
.navigation {
	position: fixed;
	z-index: 1;
	top: 0;
	width: 100%;
	padding: 1rem 3rem;
	background-color: rgb(0, 0, 0, 60%);
	scroll-behavior: smooth;

	background-blend-mode: darken;

	hgroup > a {
		display: flex;
		align-items: center;

		gap: 1rem;

		img {
			max-height: 40px;
		}
	}
}
</style>

<template>
	<section class="navigation">
		<hgroup>
			<NuxtLink :to="'/'">
				<PrismicImage v-if="navigation?.data" :field="navigation?.data.logo" />
				<h2 v-if="navigation?.data.title">{{ navigation?.data.title }}</h2>
			</NuxtLink>
		</hgroup>
		<nav>
			<menu></menu>
		</nav>
	</section>
</template>
