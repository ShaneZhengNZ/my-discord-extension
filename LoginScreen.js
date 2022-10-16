import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Heading, Input, Stack, Checkbox, Button, Text, Row, Pressable, Icon, MaterialIcons } from 'native-base';

const LoginScreen = () => {
	const [showPass, setShowPass] = useState(false)


	const test = () => {
		console.log("test")
	};

	return (
		<View>
			<Heading style={styles.header}>Registration Form</Heading>

			<Stack space={10}>
				<Input variant="underlined" placeholder='Name' />
				<Input variant="underlined" placeholder='Email Address' />
				<Input variant="underlined" placeholder='Country' />
				<Input variant="underlined" placeholder='Phone' />
				<Input variant="underlined" placeholder='Password' />
				<Checkbox value={true}>{"I accept terms & conditions"}</Checkbox>
				<Button style={styles.button}>Create Account</Button>
				<Row>
					<Text style={styles.placeholder}>Already have an account? </Text>
					<Pressable onPress={test}><Text color={'#007ACC'}>Sign in</Text></Pressable>
				</Row>
			</Stack>
		</View>
	)
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
	}
})

export default LoginScreen;
