import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Stories = () => {
	return (
		<View style={styles.container}>
			<Text>some shit</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'yellow',
		padding: 20,
		alignItems: 'center',
	},
})

export default Stories
