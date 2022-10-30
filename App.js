import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import Constants from 'expo-constants';
import LoginScreen from './LoginScreen';

// Initialize Firebase
const firebaseConfig = {
    apiKey: Constants.manifest.extra['firebaseApiKey'],
    authDomain: Constants.manifest.extra['firebaseAuthDomain'],
    projectId: Constants.manifest.extra['firebaseProjectId'],
    storageBucket: Constants.manifest.extra['firebaseStorageBucket'],
    messagingSenderId: Constants.manifest.extra['firebaseMessagingSenderId'],
    appId: Constants.manifest.extra['firebaseAppId'],
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default function App() {
    return (
        <NativeBaseProvider>
            <View style={styles.container}>
                <LoginScreen auth={auth} />
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
