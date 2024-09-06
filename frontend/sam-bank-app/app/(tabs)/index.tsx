import { Image, StyleSheet, Platform, Button, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const handleTransferPress = () => {
    // Navigate to the transfer screen
  };

  const handleHistoryPress = () => {
    // Navigate to the transaction history screen
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          // source={require('@/assets/images/partial-react-logo.png')}
          // style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to Your Sam Banking App</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.balanceContainer}>
        <ThemedText type="subtitle">Your Balance</ThemedText>

        <ThemedText type="largeBold">R1,234.56</ThemedText>
      </ThemedView>

      <ThemedView style={styles.buttonContainer}>
        <Button title="Transfer Money" onPress={handleTransferPress} />
        <Button title="Transaction History" onPress={handleHistoryPress} />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Get Started</ThemedText>
        <ThemedText>
          Explore the features of your banking app by navigating through the tabs below.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  balanceContainer: {
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#F5F5F5',
    marginVertical: 16,
    borderRadius: 8,
  },
  buttonContainer: {
    marginVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
