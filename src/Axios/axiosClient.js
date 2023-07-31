import axios from "axios";

const apiBaseUrl = `${import.meta.env.VITE_API_BASE_URL}/api`;

const axiosClient = axios.create({
  baseURL: apiBaseUrl,
});

axiosClient.defaults.withCredentials = true;

// Function to fetch CSRF token from the server and set it as a custom header
const setCsrfToken = async () => {
  try {
    await axiosClient.get(`${import.meta.env.VITE_API_BASE_URL}/sanctum/csrf-cookie`);
  } catch (error) {
    console.error("Failed to fetch CSRF token:", error);
  }
};

setCsrfToken()

// Set CSRF token initially when the application loads


// Function to make GET request with CSRF protection
export const get = async (url, params = {}) => {
  await setCsrfToken();
  return axiosClient.get(url, { params });
};


// Function to make POST request with CSRF protection
export const postRequest = async (url, data = {}) => {
  await setCsrfToken();
  return axiosClient.post(url, data);
};

// Function to make PUT request with CSRF protection
export const putRequest = async (url, data = {}) => {
  await setCsrfToken();
  return axiosClient.put(url, data);
};

// Function to make DELETE request with CSRF protection
export const delRequest = async (url) => {
  await setCsrfToken();
  return axiosClient.delete(url);
};

export default axiosClient;

