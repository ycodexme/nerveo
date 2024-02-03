import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { generateText, discussPdf, discussImage } from '../api/gemini';
import { generateImage, restorePhoto } from '../api/replicate';
import { textToAudio, audioToText } from '../api/openai';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSend = async () => {
    // Here you can call the appropriate API based on the input
    // For example, if the input is a text, you can call generateText
    const res = await generateText(input);
    setResponse(res);
  };

  return (
    <View>
      <Text>{response}</Text>
      <TextInput value={input} onChangeText={setInput} />
      <Button title="Send" onPress={handleSend} />
    </View>
  );
};

export default Chatbot;