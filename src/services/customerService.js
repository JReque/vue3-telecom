export async function fetchCustomers() {
    const response = await fetch('http://localhost:3000/customers');
    if (!response.ok) {
      throw new Error('Failed to fetch customers');
    }
    return await response.json();
  }
  