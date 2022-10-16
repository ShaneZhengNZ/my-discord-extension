import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Heading } from 'native-base';
import { initializeApp } from 'firebase/app';
import Constants from 'expo-constants';
import LoginScreen from './LoginScreen';

// Initialize Firebase
const firebaseConfig =
  Constants.manifest && Constants.manifest.extra
    ? {
        apiKey: Constants.manifest.extra['firebaseApiKey'],
        authDomain: Constants.manifest.extra['firebaseAuthDomain'],
        projectId: Constants.manifest.extra['firebaseProjectId'],
        storageBucket: Constants.manifest.extra['firebaseStorageBucket'],
        messagingSenderId:
          Constants.manifest.extra['firebaseMessagingSenderId'],
        appId: Constants.manifest.extra['firebaseAppId'],
      }
    : {};

initializeApp(firebaseConfig);

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
		<LoginScreen />
        <StatusBar style="auto" />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
