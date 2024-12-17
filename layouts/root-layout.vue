<script lang="ts" setup></script>

<template>
	<section class="navigation">
		<hgroup>
			<NuxtLink :to="'/'">
				<NuxtImg
					src="https://images.prismic.io/karyandra/Z2BphJbqstJ98kra_Logo_Rework_Converted.png?auto=format,compress"
				/>
				<h1>Karyandra</h1>
			</NuxtLink>
		</hgroup>
		<nav></nav>
	</section>

	<slot />

	<FooterComponent />
</template>

<style scoped>
.navigation {
	position: fixed;
	z-index: 1;
	top: 0;
	width: 100%;
	padding: 1rem;
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
