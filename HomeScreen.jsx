
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from "react-native";

export const HomeScreen = () => {
    const { navigate } = useNavigation();
    return (
        <Button title="Navigate to webview" onPress={() => { navigate('WebView') }} />
    )
}