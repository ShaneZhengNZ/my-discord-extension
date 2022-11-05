import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import LoginScreen from './LoginScreen';
import auth, { AuthContext } from './AuthContext';

export default function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            setUser(authUser);
        });
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
            }}
        >
            <NativeBaseProvider>
                <View style={styles.container}>
                    <LoginScreen />
                    <StatusBar style="auto" />
                </View>
            </NativeBaseProvider>
        </AuthContext.Provider>
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
