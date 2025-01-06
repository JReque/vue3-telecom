<!-- src/views/CustomerDetailView.vue -->
<template>
	<div class="max-w-7xl mx-auto p-6">
		<div v-if="selectedCustomer">
			<h1 class="text-3xl font-bold text-blue-700 mb-4">
				{{ selectedCustomer.givenName }}
				{{ selectedCustomer.familyName1 }}
			</h1>
			<p class="text-gray-600">{{ selectedCustomer.email }}</p>
			<p class="text-sm text-gray-500">{{ selectedCustomer.phone }}</p>

			<h2 class="text-2xl font-semibold text-blue-700 mt-8 mb-4">
				Productos del Cliente
			</h2>

			<div
				class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
			>
				<ProductCard
					v-for="product in products"
					:key="product._id"
					:product="product"
				/>
			</div>
		</div>

		<div v-else>
			<p class="text-gray-500">Cargando detalles del cliente...</p>
		</div>
	</div>
</template>

<script setup>
	import { onMounted, onBeforeUnmount } from "vue";
	import { useRoute } from "vue-router";
	import { storeToRefs } from "pinia";
	import { useCustomersStore } from "../store/customersStore";
	import { useProductsStore } from "../store/productsStore.js";
	import ProductCard from "../components/ProductCard.vue";

	const customersStore = useCustomersStore();
	const productsStore = useProductsStore();
	const route = useRoute();
	const customerId = route.params.id;
	const { selectedCustomer } = storeToRefs(customersStore);
	const { products } = storeToRefs(productsStore);

	onMounted(async () => {
		await productsStore.getProductsByCustomerId(customerId);
	});
	onBeforeUnmount(() => {
		productsStore.setProducts(null);
		customersStore.setSelectedCustomer(null);
	});
</script>

<style scoped></style>
