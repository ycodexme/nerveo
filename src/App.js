import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Chatbot from './components/Chatbot';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: 'Welcome to AI-Nervo' }}
        />
        <Stack.Screen 
          name="Chatbot" 
          component={Chatbot} 
          options={{ title: 'Chat with AI-Nervo' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}