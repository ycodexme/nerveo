import axios from 'axios';

const LANGCHAIN_API_URL = 'https://api.langchain.io'; // replace with the actual URL

export const discussWithPdf = async (pdfFile) => {
  try {
    const response = await axios.post(`${LANGCHAIN_API_URL}/discuss`, pdfFile, {
      headers: {
        'Content-Type': 'application/pdf'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error discussing with PDF:', error);
    throw error;
  }
};