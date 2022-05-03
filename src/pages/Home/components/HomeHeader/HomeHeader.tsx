import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const HomeHeader = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>some header</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		paddingTop: 40,
	},
	text: {
		textAlign: 'center',
	},
})

export default HomeHeader
