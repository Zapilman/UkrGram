import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const MainNavigation = () => {
	return (
		<View style={styles.container}>
			<Text>home</Text>
			<Text>search</Text>
			<Text>upload</Text>
			<Text>statistics</Text>
			<Text>profile</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
})

export default MainNavigation
