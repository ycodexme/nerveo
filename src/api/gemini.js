import axios from 'axios';

const GEMINI_API_URL = 'https://api.gemini.com/v1/';

const generateText = async (input) => {
  try {
    const response = await axios.post(`${GEMINI_API_URL}generateText`, { input });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const discussWithPdf = async (pdfFile) => {
  try {
    const formData = new FormData();
    formData.append('pdf', pdfFile);
    const response = await axios.post(`${GEMINI_API_URL}discussWithPdf`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const discussWithImage = async (imageFile) => {
  try {
    const formData = new FormData();
    formData.append('image', imageFile);
    const response = await axios.post(`${GEMINI_API_URL}discussWithImage`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { generateText, discussWithPdf, discussWithImage };