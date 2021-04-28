<template>
	<div class="wrapper">
		<Header id="header" />
		<Nuxt id="nuxt" />
		<div id="player" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import Header from '~/components/atoms/Header.vue';

export default defineComponent({
	components: {
		Header,
	},
	setup() {},
});
</script>

<style>
.wrapper {
	display: grid;
	grid-template-areas:
		"header player"
		"nuxt player";
	min-height: 100vh;
}

#header {
	grid-area: header;
}

#nuxt {
	grid-area: nuxt;
}

#player {
	grid-area: player;
}
</style>
