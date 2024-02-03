import axios from 'axios';

const replicateAPI = axios.create({
  baseURL: 'https://api.replicate.com',
});

export const generateImage = async (text) => {
  try {
    const response = await replicateAPI.post('/generate', { text });
    return response.data;
  } catch (error) {
    console.error('Error generating image:', error);
    return null;
  }
};

export const restoreImage = async (imageData) => {
  try {
    const response = await replicateAPI.post('/restore', { image: imageData });
    return response.data;
  } catch (error) {
    console.error('Error restoring image:', error);
    return null;
  }
};

export default {
  generateImage,
  restoreImage,
};