export async function fetchProductsByCustomerId(customerId) {
  const response = await fetch(`http://localhost:3000/customer/${customerId}`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch customer with ID: ${customerId}`);
  }

  return await response.json();
}