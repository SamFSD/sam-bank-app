import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import { useRouter } from 'expo-router';
import Auth0 from 'react-native-auth0';
import { auth0Config } from '../auth0-config.js';

const auth0 = new Auth0(auth0Config);

export default function LoginScreen() {
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      // const result = await auth0.webAuth.authorize({
      //   scope: 'openid profile email',
      //   audience: auth0Config.redirectUri,
      // });

      // // Handle the result, e.g., save the access token
      // console.log(result);

      // Navigate to the home screen or dashboard
      router.push('/(tabs)');
    } catch (err) {
      setError(err.message);
      console.error('Login failed:', err);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Welcome to The Banking App</Text>
      <Text style={{ fontSize: 18, marginBottom: 40 }}>Please Login Below</Text>
      <Button title="Login" onPress={handleLogin} />

      {error && (
        <Text style={{ color: 'red', marginTop: 20 }}>
          {error}
        </Text>
      )}
    </View>
  );
}
