import axios from 'axios';

const OPENAI_API_KEY = 'your_openai_api_key';

const openai = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Authorization': `Bearer ${OPENAI_API_KEY}`,
    'Content-Type': 'application/json'
  }
});

export const textToSpeech = async (text) => {
  try {
    const response = await openai.post('/engines/davinci-codex/completions', {
      prompt: text,
      max_tokens: 60
    });
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error(error);
  }
};

export const speechToText = async (audio) => {
  try {
    const response = await openai.post('/engines/davinci-codex/completions', {
      prompt: audio,
      max_tokens: 60
    });
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error(error);
  }
};