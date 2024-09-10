import { useAuthRequest } from 'expo-auth-session';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth0Config } from '../auth0-config';
import { useState, useEffect } from 'react';
import React from 'react';
import { View, Text, Button } from 'react-native';
import Auth0 from 'react-native-auth0';

const auth0 = new Auth0(auth0Config);

const LoginScreen = () => {
  const [request, response, promptAsync] = useAuthRequest({
    clientId: auth0Config.clientId,
    redirectUri: auth0Config.redirectUri,
    scopes: ['openid', 'profile'],
  }, {
    authorizationEndpoint: `https://${auth0Config.domain}/authorize`,
  });

  const router = useRouter();
  const [error] = useState(null);

  useEffect(() => {
    if (response?.type === 'success') {
      handleLoginSuccess(response.params.code);
    } else if (response?.type === 'error') {
    }
  }, [response, router]);

  const handleLoginSuccess = async (code: string) => {
    try {
      const tokens = await auth0.auth.token({
        code,
        redirectUri: auth0Config.redirectUri,
        clientId: auth0Config.clientId,
      });
      await AsyncStorage.setItem('authToken', tokens.accessToken);
      console.log('Login successful:', tokens);
      alert(`Login successful: ${tokens.accessToken}`);
      router.replace('(tabs)');
    } catch (error) {
      console.error('Error exchanging code for tokens', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Welcome to The Banking App</Text>
      <Text style={{ fontSize: 18, marginBottom: 40 }}>Please Login Below</Text>
      <Button title="Login" onPress={promptAsync} disabled={!request} />
      {error && <Text style={{ color: 'red', marginTop: 20 }}>{error}</Text>}
    </View>
  );
};

export default LoginScreen;