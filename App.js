import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import LoginScreen from './LoginScreen';
import UserScreen from './UserScreen';
import LoadingScreen from './LoadingScreen';
import auth, { AuthContext } from './AuthContext';
import { registerForPushNotificationsAsync } from 'expo-notifications';

export default function App() {
    const [user, setUser] = useState(undefined);
    const [token, setToken] = useState(undefined);

    useEffect(() => {
        registerForPushNotificationsAsync().then((token) => {
            setToken(token);
        });
    }, []);

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            setUser(authUser);
        });
    }, []);

    const renderScreens = () => {
        if (user === undefined) {
            return <LoadingScreen />;
        } else if (user) {
            return <UserScreen user={user} />;
        } else {
            return <LoginScreen />;
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
            }}
        >
            <NativeBaseProvider>
                <View style={styles.container}>
                    {renderScreens()}
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
