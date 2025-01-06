export async function fetchProductsByCustomerId(customerId) {
	const response = await fetch(`${import.meta.env.VITE_API_UR}/customer/${customerId}`);
	if (!response.ok) {
		throw new Error(`Failed to fetch customer with ID: ${customerId}`);
	}
	return await response.json();
}