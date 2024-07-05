import axios from "axios";

const URLAPI_USERS = `${process.env.API_URL}/auth/`

export const login = async (userData) => {
  try {
    const response = await axios.post(`${URLAPI_USERS}login`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const userRegister = async (userData) => {
  try {
    const response = await axios.post(`${URLAPI_USERS}register`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
