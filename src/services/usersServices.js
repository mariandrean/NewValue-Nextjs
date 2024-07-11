import axios from "axios";
import { NEWVALUE_API_URL } from "../../config";

const URL = NEWVALUE_API_URL+`/auth`

export const login = async (userData) => {
  try {
    const response = await axios.post(`${URL}/login`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const userRegister = async (userData) => {
  try {
    const response = await axios.post(`${URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
