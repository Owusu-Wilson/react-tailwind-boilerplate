import axios from "axios";

const BASE_API_URL = "http://localhost:8000";

// Function to add an item
/**
 * Add an item of the specified type.
 *
 * @param {Object} item - The item to add.
 * @param {string} item_type - The type of item.
 * @returns {Promise<Object>} A promise that resolves to the added item.
 * @throws {Error} If the addition fails.
 */
async function add_item(item, item_type) {
  let request_url = `${BASE_API_URL}/${item_type}`;
  try {
    const response = await axios.post(request_url, item);
    console.log(`${item_type} added successfully:`, response.data);
    return response.data;
  } catch (error) {
    console.error(`Error adding ${item_type}`, error.message);
    throw error;
  }
}

// Function to fetch items
/**
 * Fetch items of the specified type.
 *
 * @param {string} item_type - The type of item to fetch.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of items.
 * @throws {Error} If the fetch operation fails.
 */
const fetch_items = async (item_type) => {
  let request_url = `${BASE_API_URL}/${item_type}`;
  try {
    const response = await axios.get(request_url);
    console.log(`${item_type} Results:`, response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${item_type}`, error.message);
    throw error;
  }
};

// Function to update an item
/**
 * Update an item of the specified type.
 *
 * @param {Object} item - The item to update.
 * @param {string} item_type - The type of item.
 * @returns {Promise<Object>} A promise that resolves to the updated item.
 * @throws {Error} If the update fails.
 */
async function update_item(item, item_type) {
  let request_url = `${BASE_API_URL}/${item_type}/${item.id}`;
  try {
    const response = await axios.put(request_url, item);
    console.log(`${item_type} updated successfully:`, response.data);
    return response.data;
  } catch (error) {
    console.error(`Error updating ${item_type}`, error.message);
    throw error;
  }
}

// Function to delete an item
/**
 * Delete an item of the specified type by ID.
 *
 * @param {string} id - The ID of the item to delete.
 * @param {string} item_type - The type of item.
 * @throws {Error} If the deletion fails.
 */
async function delete_item(id, item_type) {
  let request_url = `${BASE_API_URL}/${item_type}/${id}`;
  try {
    await axios.delete(request_url);
    console.log(`${item_type} deleted successfully`);
  } catch (error) {
    console.error(`Error deleting ${item_type}`, error.message);
    throw error;
  }
}

export { add_item, fetch_items, update_item, delete_item };
