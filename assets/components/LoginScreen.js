import 'react-native-gesture-handler';

import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';

const LoginScreen = ({ navigation }) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [loginNotification, setLoginNotification] = useState('');

	const handleLogin = () => {
		if (username === '' || password === '') {
			setLoginNotification('Username atau Password Harus Dimasukkan.');
		} else if (username === 'admin' && password === 'admin') {
			setLoginNotification('Login Berhasil!');
			navigation.navigate('Home');
		} else {
			setLoginNotification('Username atau Password Salah.');
		}
	};

	const handleRegister = () => {
		navigation.navigate('Register');
	};
	return (
		<View style={styles.mainBody}>
			<ScrollView
				keyboardShouldPersistTaps='handled'
				contentContainerStyle={{
					flex: 1,
					justifyContent: 'center',
					alignContent: 'center',
				}}
			>
				<View>
					<KeyboardAvoidingView enabled>
						<View style={{ alignItems: 'center' }}>
							<Image source={require('./gambar/Halal.png')} style={{ width: 70, height: 130 }} />
						</View>
						{loginNotification ? (
        <Text style={styles.notification}>{loginNotification}</Text>
      ) : null}
						<View style={styles.SectionStyle}>
							<TextInput style={styles.inputStyle} placeholder='Username' value={username} onChangeText={setUsername} />
						</View>
						<View style={styles.SectionStyle}>
							<TextInput style={styles.inputStyle} placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry />
						</View>
						<TouchableOpacity style={styles.buttonStyle} onPress={handleLogin}>
							<Text style={styles.buttonTextStyle}>Login</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.buttonStyle} onPress={handleRegister}>
							<Text style={styles.buttonTextStyle}>Register</Text>
						</TouchableOpacity>
					</KeyboardAvoidingView>
				</View>
			</ScrollView>
		</View>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	mainBody: {
		flex: 1,
		justifyContent: 'center',
	},
	SectionStyle: {
		flexDirection: 'row',
		height: 40,
		marginTop: 5,
		marginLeft: 25,
		marginRight: 25,
		margin: 10,
	},
	inputStyle: {
		backgroundColor: '#FFF',
		flex: 1,
		color: '#000',
		paddingLeft: 15,
		paddingRight: 15,
		borderWidth: 2,
		borderRadius: 5,
		borderColor: '#dadae8',
	},
	buttonStyle: {
		backgroundColor: '#008080',
		alignItems: 'center',
		height: 30,
		marginLeft: 25,
		marginRight: 25,
		marginTop: 10,
		borderRadius: 5,
	},
	buttonTextStyle: {
		color: 'white',
		paddingVertical: 4,
		fontSize: 16,
	},
    notification: {
        marginTop: 16,
        textAlign: 'center',
        color: 'red',
      },
});
