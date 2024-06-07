
import React, { useEffect } from 'react';
import LogRocket from '@logrocket/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './HomeScreen';
import { WebViewScreen } from './WebView';

const Stack = createNativeStackNavigator();

export default function App() {
  LogRocket.init("enter slug", {
    enableIPCapture: true,
    network: {
      isEnabled: true,
    },
    console: {
      isEnabled: true,
    },
  });
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="WebView" component={WebViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )  
}
