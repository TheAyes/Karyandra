<script lang="ts" setup>
const prismic = usePrismic();
</script>

<style>
.root-div {
	display: flex;
	flex-direction: column;
	height: 100%;

	& > * {
		flex: 0 0 auto;
	}

	& > main {
		flex: 1 1 0;
	}
}
</style>
<template>
	<div class="root-div" style="height: 100%">
		<NuxtLayout :name="'root-layout'">
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>
