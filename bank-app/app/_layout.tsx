import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from 'react';
import 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Auth0 from 'react-native-auth0';
import { auth0Config } from '../auth0-config'; // Your Auth0 config

const auth0 = new Auth0(auth0Config);

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

async function fetchCredentials() {
  try {
    // Retrieve stored token from AsyncStorage or SecureStorage
    const token = await AsyncStorage.getItem('authToken');
    if (token) {
      // Optionally, verify token or check if it's expired
      return { token };
    }
    return null;
  } catch (error) {
    console.error('Error fetching credentials', error);
    return null;
  }
}

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Handle font loading errors
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    async function checkLoginStatus() {
      try {
        const credentials = await fetchCredentials();
        if (credentials) {
          console.log('Credentials found:', credentials);
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Error checking login status', error);
        setIsLoggedIn(false);
      } finally {
        setLoading(false);
      }
    }
    checkLoginStatus();
  }, []);

  if (loading || !loaded) {
    return null;
  }

  return <RootLayoutNav isLoggedIn={isLoggedIn} />;
}

function RootLayoutNav({ isLoggedIn }) {
  const router = useRouter();



  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
    </Stack>
  );
}
