<template>
	<header class="flex justify-between items-center bg-white h-24 px-16 py-8 border-b border-gray-200">
		<div class="flex items-center">
			<img src="icons/logo.svg" alt="Podcastr Vue Logo">
			<p class="ml-8 py-1 pl-8 border-l border-gray-200">The best to you hear, always</p>
		</div>
		<span class="capitalize">{{ date }}</span>
	</header>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import formatDate from '~/utils/date';

export default defineComponent({
	setup() {
		return {
			date: formatDate(new Date(), 'EEEEEE, d MMMM'),
		};
	},
});
</script>
