import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import LoginScreen from './assets/components/LoginScreen';
// import HomeScreen from './assets/components/HomeScreen';
import KalkulatorScreen from './assets/components/KalkulatorScreen';
// import DzikirScreen from './assets/components/DzikirScreen';
// import GalleryScreen from './assets/components/GalleryScreen';
// import KontakScreen from './assets/components/KontakScreen';

const Stack = createStackNavigator();

function MyStack() {
	return (
		<Stack.Navigator>
      			{/* <Stack.Screen name='Login' component={LoginScreen} /> */}
			      {/* <Stack.Screen name='Home' component={HomeScreen} /> */}
            <Stack.Screen name='Kalkulator' component={KalkulatorScreen} />
            {/* <Stack.Screen name='Dzikir' component={DzikirScreen} /> */}
            {/* <Stack.Screen name='Gallery' component={GalleryScreen} /> */}
            {/* <Stack.Screen name='Kontak' component={KontakScreen} /> */}
    </Stack.Navigator>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<MyStack />
		</NavigationContainer>
	);
}