import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DzikirScreen = ({ navigation }) => {
	const [counter, setCounter] = useState(0);
	const [initialCount, setInitialCount] = useState(0);

	const handleInitialCountChange = (value) => {
		setInitialCount(Number(value));
	};

    // Function untuk reset angka
	const handleReset = () => {
		setCounter(initialCount);
	};
    
    // Function untuk menambahkan setiap button di klik
	const handleClick = () => {
		setCounter(counter + 1);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Sudah Berapa Kali Dzikir</Text>
			<Text style={styles.counterValue}>{counter}</Text>
			<View style={styles.buttons}>
				<TouchableOpacity style={styles.button} onPress={handleClick}>
					<Text style={{ color: 'white' }}>Tambah</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={handleReset} value={initialCount.toString()} onChangeText={handleInitialCountChange}>
					<Text style={{ color: 'white' }}>Reset</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default DzikirScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#f8f8f8',
	},
	text: {
		fontSize: 18,
        fontWeight: 'bold',
		marginVertical: 10,
		color: '#333',
		textTransform: 'uppercase',
	},
	counterValue: {
		fontSize: 36,
		fontWeight: 'bold',
		marginVertical: 10,
		color: '#d9534f',
	},
	buttons: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	button: {
		fontSize: 16,
		padding: 13,
		margin: 5,
		borderRadius: 8,
		backgroundColor: '#008080',
		elevation: 10,
	},
	setInitialCountButton: {
		padding: 10,
		fontSize: 16,
		margin: 15,
		borderRadius: 8,
		backgroundColor: 'blue',
		elevation: 20,
	},
    nextButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 100,
        elevation: 10,
    },
    nextButtonText: {
        color: 'white',
        fontSize: 16,
    },
});
