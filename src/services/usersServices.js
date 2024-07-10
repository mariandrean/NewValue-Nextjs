import axios from "axios";

const URL_AUTH = `http://localhost:5000/api/auth/`

export const login = async (userData) => {
  try {
    const response = await axios.post(`${URL_AUTH}login`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const userRegister = async (userData) => {
  try {
    const response = await axios.post(`${URL_AUTH}register`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
