const BASE_URL = "https://fakestoreapi.com";
const PRODUCTS_ENDPOINT = `${BASE_URL}/products`;

export async function getProducts() {
  try {
    const response = await fetch(PRODUCTS_ENDPOINT, {
      method: "GET",
    });
    const data = await response.json();
    console.log("Products:");
    data.map((product) => {
      console.log(product);
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getProduct(id) {
  try {
    const response = await fetch(`${PRODUCTS_ENDPOINT}/${id}`, {
      method: "GET",
    });
    const data = await response.json();
    console.log("Product info:", data);
  } catch (error) {
    console.log(error);
  }
}

export async function addProduct(product) {
  try {
    const response = await fetch(PRODUCTS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await response.json();
    console.log("Product added successfully", data);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteProduct(id) {
  try {
    const response = await fetch(`${PRODUCTS_ENDPOINT}/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log("Product deleted successfully", data);
  } catch (error) {
    console.log(error);
  }
}

export async function updateProduct(product) {
  try {
    const response = await fetch(`${PRODUCTS_ENDPOINT}/${product.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await response.json();
    console.log("Product updated successfully", data);
  } catch (error) {
    console.log(error);
  }
}
