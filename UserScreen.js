import { StyleSheet } from 'react-native';
import { VStack, Text, Heading, Button } from 'native-base';
import auth from './AuthContext';
import { signOut } from 'firebase/auth';

const UserScreen = ({ user }) => {
    const handleSignOut = () => {
        signOut(auth);
    };

    return (
        <VStack
            flexGrow={1}
            justifyContent="center"
            space={3}
            width="100%"
            paddingX={6}
        >
            <Heading style={styles.header}>Welcome,</Heading>
            <Text>{user.email}</Text>
            <Button style={styles.button} onPress={handleSignOut}>
                Sign Out
            </Button>
        </VStack>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
        color: '#007ACC',
    },
    button: {
        borderRadius: 30,
        height: 50,
        backgroundColor: '#00827D',
    },
});

export default UserScreen;
