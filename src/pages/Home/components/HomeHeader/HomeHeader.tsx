import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const HomeHeader = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>camera</Text>
			<Text style={styles.text}>UkrGram</Text>
			<Text style={styles.text}>direct</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		paddingTop: 40,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
	},
	text: {
		textAlign: 'center',
	},
})

export default HomeHeader
