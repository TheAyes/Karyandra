<script lang="ts" setup>
const prismic = usePrismic();
</script>

<style></style>

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
		<nav>
			<menu></menu>
		</nav>
	</section>
</template>
