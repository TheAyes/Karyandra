<template>
	<section>
		<hgroup>
			<NuxtImg />
			<h1>Karyandra</h1>
		</hgroup>
		<nav></nav>
	</section>

	<slot />
</template>

<style scoped>
section {
	position: fixed;
	width: 100%;
	padding: 1rem;
	background-color: rgb(0, 0, 0, 60%);
	background-blend-mode: darken;
}

hgroup {
	display: flex;
	gap: 1rem;
}
</style>
<script lang="ts" setup></script>
