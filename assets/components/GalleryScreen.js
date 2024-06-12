import { useEffect, useState } from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native';
import { MasonryFlashList } from '@shopify/flash-list';


// RANDOM API
const API_ENDPOINT = 'https://randomuser.me/api/?results=30';

const GalleryScreen = ({ navigation }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		fetchData(API_ENDPOINT);
	}, []);

    // UNTUK MEMANGGIL/FETCH API
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
			<View style={styles.notfiLoading}>
				<ActivityIndicator size={'large'} color='#5500dc' />
			</View>
		);
	}

	if (error) {
		return (
			<View style={styles.notfiLoading}>
				<Text>Error memanggil data ... periksa koneksi internet</Text>
			</View>
		);
	}

	return (
		<SafeAreaView style={styles.dataDiri}>
			<MasonryFlashList
				data={data}
				keyExtractor={(item) => item.login.username}
				numColumns={3}
				renderItem={({ item }) => (
					<View style={styles.itemContainer}>
						<Image source={{ uri: item.picture.thumbnail }} style={styles.image} />
					</View>
				)}
				estimatedItemSize={200}
			/>
		</SafeAreaView>
	);
};

export default GalleryScreen;

const styles = StyleSheet.create({
	itemContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 10,
		marginTop: 10,
	},
	image: {
		width: 100,
		height: 100,
		borderRadius: 8,
	},
    notfiLoading: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dataDiri: {
        flex: 1,
        marginHorizontal: 20,
    },
});
