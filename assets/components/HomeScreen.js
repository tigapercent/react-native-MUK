import 'react-native-gesture-handler'

import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <TouchableOpacity style={styles.inner} onPress={() => navigation.navigate('Kalkulator')}>
                    <Icon name="calculate" size={50} color="#fff" />
                    {/* <Image source={require('./gambar/calculator.png')} style={{ width: 30, height: 30 }} /> */}
                    <Text style={styles.text}>Kalkulator</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.box}>
                <TouchableOpacity style={styles.inner} onPress={() => navigation.navigate('Dzikir')} >
                <Icon name="mosque" size={50} color="#fff" />
                    <Text style={styles.text}>Dzikir</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.box}>
                <TouchableOpacity style={styles.inner} onPress={() => navigation.navigate('Gallery')}>
                <Icon name="image" size={50} color="#fff" />
                    <Text style={styles.text}>Gallery</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.box}>
                <TouchableOpacity style={styles.inner} onPress={() => navigation.navigate('Kontak')}>
                <Icon name="contacts" size={50} color="#fff" />
                    <Text style={styles.text}>Kontak</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '85%',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 250,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    box: {
        width: '35%',
        height: '20%',
        padding: 5,
    },
    inner: {
        flex: 1,
        backgroundColor: '#008080',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        elevation: 10
    },
    text: {
        color: 'white', 
        fontWeight: 'bold',
        paddingTop: 5,
    }
});