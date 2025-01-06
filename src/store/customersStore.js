import { defineStore } from "pinia";
import { ref } from "vue";
import { fetchCustomers } from "../services/customerService"; // Importamos el servicio

export const useCustomersStore = defineStore("customers", () => {
	const customers = ref([]);
	const selectedCustomer = ref(null);

	const getCustomers = async () => {
		try {
			customers.value = await fetchCustomers();
		} catch (error) {
			console.error("Error al cargar los clientes:", error);
		}
	};

	const setSelectedCustomer = (customer) => {
		selectedCustomer.value = customer;
	};

	return {
		customers,
		selectedCustomer,
		getCustomers,
		setSelectedCustomer,
	};
});
