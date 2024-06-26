import { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native';

const API_ENDPOINT = 'https://randomuser.me/api/?results=30';

const KontakScreen = ({ navigation }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		fetchData(API_ENDPOINT);
	}, []);

	const fetchData = async (url) => {
		try {
			const response = await fetch(url);
			const json = await response.json();
			setData(json.results);

			console.log(json.results);

			setIsLoading(false);
		} catch (error) {
			setError();
			console.log(error);
		}
	};

	if (isLoading) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator size={'large'} color='#5500dc' />
			</View>
		);
	}

	if (error) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Error memanggil data ... periksa koneksi internet</Text>
			</View>
		);
	}

	return (
		<SafeAreaView style={{ flex: 1, marginHorizontal: 20 }}>
			<FlatList
				data={data}
				keyExtractor={(item) => item.login.username}
				renderItem={({ item }) => (
					<View style={styles.itemContainer}>
						<Image source={{ uri: item.picture.thumbnail }} style={styles.image} />
						<View>
							<Text style={styles.textName}>
								{item.name.first} {item.name.last}{' '}
							</Text>
							<Text style={styles.textEmail}>{item.email} </Text>
						</View>
					</View>
				)}
			/>
		</SafeAreaView>
	);
};

export default KontakScreen;

const styles = StyleSheet.create({
	itemContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 10,
		marginTop: 10,
	},
	image: {
		width: 50,
		height: 50,
		borderRadius: 25,
	},
	textName: {
		fontSize: 17,
		marginLeft: 10,
		fontWeight: '600',
	},
	textEmail: {
		fontSize: 14,
		marginLeft: 10,
		color: 'grey',
	},
});
