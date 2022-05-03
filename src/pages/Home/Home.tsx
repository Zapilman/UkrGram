import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import HomeHeader from './components/HomeHeader/HomeHeader'
import Stories from './components/Stories/Stories'

const Home: FC = () => {
	return (
		<View style={styles.container}>
			<HomeHeader />
			<Stories />
			<Text
				style={{
					flex: 8,
				}}
			>
				text
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'green',
		alignItems: 'stretch',
		justifyContent: 'center',
	},
})

export default Home
