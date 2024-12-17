<script lang="ts" setup>
// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.

const props = defineProps({
	height: {
		type: Number,
		required: false,
		default: 350
	},
	imageUrl: {
		type: String,
		required: false
	},
	textColor: {
		type: String,
		required: false,
		default: "#ed8f12"
	},
	text: {
		type: String,
		required: true
	}
});

const img = useImage();
const image = img(props.imageUrl ?? "");
</script>

<template>
	<section
		:style="{
			height: height + 'px',
			backgroundImage: image ? `url(${image})` : ''
		}"
	>
		<h1
			:style="{
				color: textColor
			}"
		>
			{{ text }}
		</h1>
	</section>
</template>

<style scoped>
section {
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #232323;

	background-repeat: no-repeat;

	background-attachment: local;
	background-position: center;
	background-size: cover;
	background-blend-mode: soft-light;

	perspective: 1px;

	h1 {
		font-family: Lexend, sans-serif;
		font-size: 4rem;
		font-weight: 900;
	}
}
</style>
