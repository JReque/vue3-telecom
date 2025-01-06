import { defineStore } from "pinia";
import { ref } from "vue";
import { fetchProductsByCustomerId } from "../services/productService";
import { useCustomersStore } from "./customersStore";

export const useProductsStore = defineStore("products", () => {
	const products = ref(null);
	const customersStore = useCustomersStore();


	const setProducts = (collectionProducts) => {
		products.value =  collectionProducts;
	};

	const getProductsByCustomerId = async (customerId) => {
		try {
			const { customer, products: fetchedProducts } = await fetchProductsByCustomerId(customerId);
			setProducts(fetchedProducts);
			customersStore.setSelectedCustomer(customer);
		} catch (error) {
			console.error("Error al cargar los clientes:", error);
		}
	};


	return {
		products,
		getProductsByCustomerId,
		setProducts
	};
});
