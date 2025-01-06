<template>
	<li
		class="p-4 bg-white rounded-lg shadow-lg hover:bg-blue-100 transition-all duration-300 cursor-pointer"
		@click="goToCustomerDetail(customer.customerId)"
	>
		<div class="flex items-center space-x-4">
			<div class="flex-shrink-0">
				<img
					v-if="customer.avatarUrl"
					:src="customer.avatarUrl"
					alt="Avatar"
					class="h-12 w-12 rounded-full"
				/>
				<div
					v-else
					class="h-12 w-12 bg-blue-500 text-white flex items-center justify-center rounded-full font-bold"
				>
					{{ customer.givenName[0] }}
				</div>
			</div>

			<div class="flex-1">
				<h2 class="text-xl font-semibold text-blue-800">
					{{ customer.givenName }} {{ customer.familyName1 }}
				</h2>
				<p class="text-gray-600">{{ customer.email }}</p>
				<p class="text-sm text-gray-500">
					{{ customer.phone }}
				</p>
			</div>

			<div class="flex-shrink-0 text-blue-600">
				<EyeIcon class="w-6 h-6" />
			</div>
		</div>
	</li>
</template>

<script setup>
	import { EyeIcon } from "@heroicons/vue/24/solid";

	const props = defineProps({
		customer: {
			type: Object,
			required: true,
		},
	});

	const emit = defineEmits(["goToCustomerDetail"]);

	const goToCustomerDetail = (customerId) => {
		emit("goToCustomerDetail", customerId);
	};
</script>

<style scoped>
	/* Estilos adicionales opcionales */
</style>
