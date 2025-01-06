<template>
	<div class="bg-white p-6 rounded-lg shadow-lg">
		<h3 class="text-xl font-semibold text-blue-800">
			{{ product.productName }}
		</h3>
		<p class="text-sm text-gray-500">
			Velocidad: {{ product.mbSpeed || "N/A" }} MB
		</p>
		<p class="text-sm text-gray-500">
			Datos: {{ product.gbData || "N/A" }} GB
		</p>
	</div>
</template>

<script setup>
	const props = defineProps({
		product: {
			type: Object,
			required: true,
		},
	});
</script>

<style scoped></style>
