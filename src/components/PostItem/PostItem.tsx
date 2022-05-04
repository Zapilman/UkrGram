import { View, Text, StyleSheet, Button } from 'react-native'

const PostItem = (): JSX.Element => {
	return (
		<View style={{}}>
			<View style={styles.postHeader}>
				<Text>Channel name</Text>
				<Button title='Options' onPress={() => console.log('hi')} />
			</View>
			<View style={styles.contentContainer}>
				<Text>content</Text>
			</View>
			<View style={styles.usageContainer}>
				<Text>usage</Text>
			</View>
			<View>
				<Text style={styles.comments}>comments</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	postHeader: {
		backgroundColor: 'white',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
	},
	contentContainer: {
		backgroundColor: 'blue',
		minHeight: 350,
	},
	usageContainer: {
		backgroundColor: 'red',
	},
	comments: {
		backgroundColor: 'purple',
	},
})

export default PostItem
