import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
    Heading,
    Input,
    VStack,
    HStack,
    Checkbox,
    Button,
    Text,
    Pressable,
} from 'native-base';
import {
    createUserWithEmailAndPassword,
    signInWithCredential,
} from 'firebase/auth';
import auth from './AuthContext';

const LoginScreen = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [country, setCountry] = useState();
    const [phone, setPhone] = useState();
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isSignIn, setIsSignIn] = useState(true);

    const handleAccountCreate = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.log(error);
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const toggleSignInStatus = () => {
        setIsSignIn(!isSignIn);
        setEmail(null);
        setPassword(null);
    };

    const signin = async () => {
        await signInWithCredential(auth, email, password);
    };

    return (
        <VStack
            flexGrow={1}
            justifyContent="center"
            space={3}
            width="100%"
            paddingX={6}
        >
            <Heading style={styles.header}>
                {isSignIn ? 'Please Login' : 'Registration Form'}
            </Heading>
            {!isSignIn && (
                <Input
                    variant="underlined"
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                />
            )}
            <Input
                variant="underlined"
                placeholder="Email Address"
                value={email}
                onChangeText={setEmail}
            />
            {!isSignIn && (
                <Input
                    variant="underlined"
                    placeholder="Country"
                    value={country}
                    onChangeText={setCountry}
                />
            )}
            {!isSignIn && (
                <Input
                    variant="underlined"
                    placeholder="Phone"
                    value={phone}
                    onChangeText={setPhone}
                />
            )}
            <Input
                variant="underlined"
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                type={!showPassword ? 'password' : 'text'}
            />
            <Checkbox value={showPassword} onChange={toggleShowPassword}>
                {'Show Password'}
            </Checkbox>
            {!isSignIn && (
                <Checkbox value={acceptTerms} onChange={setAcceptTerms}>
                    {'I accept terms & conditions'}
                </Checkbox>
            )}
            {!isSignIn && (
                <Button
                    style={styles.button}
                    onPress={handleAccountCreate}
                    disabled={!acceptTerms}
                >
                    Create Account
                </Button>
            )}
            {isSignIn && (
                <Button style={styles.button} onPress={signin}>
                    Login
                </Button>
            )}
            {!isSignIn && (
                <HStack>
                    <Text style={styles.placeholder}>
                        Already have an account?{' '}
                    </Text>
                    <Pressable onPress={toggleSignInStatus}>
                        <Text color={'#007ACC'}>Sign in</Text>
                    </Pressable>
                </HStack>
            )}
            {isSignIn && (
                <HStack>
                    <Text style={styles.placeholder}>Need an account ? </Text>
                    <Pressable onPress={toggleSignInStatus}>
                        <Text color={'#007ACC'}>Sign Up Now</Text>
                    </Pressable>
                </HStack>
            )}
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
    placeholder: {
        fontColor: '#AAABAD',
    },
});

export default LoginScreen;
