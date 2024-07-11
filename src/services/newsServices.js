import axios from "axios";
import { NEWVALUE_API_URL } from "../../config";

const URL = `${NEWVALUE_API_URL}/news`;

export const getAllNews = async () => {
  try {
    const response = await axios.get(URL);
    return response.data.sort((a, b) => (a.date < b.date) ? 1 : -1);
  } catch (error) {
    console.error('Error reading news:', error);
    throw error;
  }
};

export const getNewsById = async (id) => {
  try {
    const response = await axios.get(`${URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error reading news`, error);
    throw error;
  }
};

export const createNews = async (newsData, token) => {
  if (token) {
    try {
      const headers = { 'Authorization': `Bearer ${token}` }
      const response = await axios.post(`${URL}`, newsData, { headers });
      return response.data;
    } catch (error) {
      console.error('Error creating news:', error);
      throw error;
    }
  }
};

export const deleteNews = async (id, token) => {
  if (token) {
    try {
      const headers = { 'Authorization': `Bearer ${token}` }
      const response = await axios.delete(`${URL}/${id}`, { headers });
      return response.data;
    } catch (error) {
      console.error('Error deleting news:', error);
      throw error;
    }
  }
}

export const updateNews = async (id, newsData, token) => {
  if (token) {
    try {
      const headers = { 'Authorization': `Bearer ${token}` }
      const response = await axios.put(`${URL}/${id}`, newsData, { headers });
      return response.data;
    } catch (error) {
      console.error('Error updating news:', error);
      throw error;
    }
  }
};