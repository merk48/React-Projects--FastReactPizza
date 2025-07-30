const API_URL = "https://react-fast-pizza-api.jonas.io/api";

export async function getMenu() {
  try {
    const res = await fetch(`${API_URL}/menu`);

    // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`HTTP ${res.status} - ${errorText}`);
    }
    const { data } = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    throw Error(err);
  }
}

export async function getOrder(id) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`);
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`HTTP ${res.status} - ${errorText}`);
    }
    const { data } = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    throw Error(err);
  }
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`HTTP ${res.status} - ${errorText}`);
    }
    const { data } = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    throw Error(err);
  }
}

export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`HTTP ${res.status} - ${errorText}`);
    }
    // We don't need the data, so we don't return anything
  } catch (err) {
    throw Error(err);
  }
}
