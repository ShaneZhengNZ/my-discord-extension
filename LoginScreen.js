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
import { auth, createUserWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = () => {
  const handleAccountCreate = async () => {
    try {
      await createUserWithEmailAndPassword(auth, 'ljl', 'sajjfelk88Jjk');
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignIn = () => {};

  return (
    <VStack
      flexGrow={1}
      justifyContent="center"
      space={3}
      width="100%"
      paddingX={6}>
      <Heading style={styles.header}>Registration Form</Heading>
      <Input variant="underlined" placeholder="Name" />
      <Input variant="underlined" placeholder="Email Address" />
      <Input variant="underlined" placeholder="Country" />
      <Input variant="underlined" placeholder="Phone" />
      <Input variant="underlined" placeholder="Password" />
      <Checkbox value={true}>{'I accept terms & conditions'}</Checkbox>
      <Button style={styles.button} onPress={handleAccountCreate}>
        Create Account
      </Button>
      <HStack>
        <Text style={styles.placeholder}>Already have an account? </Text>
        <Pressable onPress={handleSignIn}>
          <Text color={'#007ACC'}>Sign in</Text>
        </Pressable>
      </HStack>
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
