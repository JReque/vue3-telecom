<template>
	<div class="max-w-7xl mx-auto p-6">
		<div class="flex justify-center items-center space-x-4 mb-6">
			<input
				type="text"
				placeholder="Buscar cliente..."
				class="p-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
				v-model="searchQuery"
				@input="filterCustomers"
			/>
		</div>
		<ul class="space-y-4 mt-4" v-if="customers.length">
			<CustomerItem
				v-for="customer in filteredCustomers"
				:key="customer.customerId"
				:customer="customer"
				@goToCustomerDetail="goToCustomerDetail"
			/>
		</ul>
	</div>
</template>

<script setup>
	import { onBeforeMount, ref } from "vue";
	import { useRouter } from "vue-router";
	import { useCustomersStore } from "../store/customersStore";
	import CustomerItem from "../components/CustomerItem.vue";
	import { storeToRefs } from "pinia";

	const customersStore = useCustomersStore();
	const router = useRouter();
	const { customers } = storeToRefs(customersStore);

	const searchQuery = ref("");
	const filteredCustomers = ref(null);

	onBeforeMount(async () => {
		await customersStore.getCustomers();
		filteredCustomers.value = customers.value;
	});

	const goToCustomerDetail = async (customerId) => {
		const selectedCustomer = customers.value.find(
			(customer) => customer.customerId === customerId
		);

		await customersStore.setSelectedCustomer(selectedCustomer);
		router.push({ name: "customer-detail", params: { id: customerId } });
	};

	const filterCustomers = () => {
		if (!searchQuery.value) {
			filteredCustomers.value = customers.value;
		} else {
			filteredCustomers.value = customers.value.filter((customer) => {
				return (
					customer.givenName
						.toLowerCase()
						.includes(searchQuery.value.toLowerCase()) ||
					customer.familyName1
						.toLowerCase()
						.includes(searchQuery.value.toLowerCase()) ||
					customer.email
						.toLowerCase()
						.includes(searchQuery.value.toLowerCase())
				);
			});
		}
	};
</script>

<style scoped></style>
