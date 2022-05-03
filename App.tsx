import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import MainNavigation from './src/components/MainNavigation/MainNavigation'
import Home from './src/pages/Home/Home'

export default function App() {
	return (
		<View style={styles.container}>
			<Home />
			<MainNavigation />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})
