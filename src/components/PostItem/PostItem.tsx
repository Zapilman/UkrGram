import { FC } from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'

interface Props {
	optionsClickHandler: () => void
}

const PostItem: FC<Props> = ({ optionsClickHandler }: Props) => {
	return (
		<View style={{}}>
			<View style={styles.postHeader}>
				<Text>Channel name</Text>
				<Button title='Options' onPress={optionsClickHandler} />
			</View>
			<View style={styles.contentContainer}>
				<Image
					style={{
						width: '100%',
						height: '100%',
						resizeMode: 'stretch',
					}}
					source={require('../../../assets/20200310_210822.jpg')}
				/>
			</View>
			<View style={styles.usageContainer}>
				<View style={styles.usageOptions}>
					<Text
						style={{
							marginLeft: 20,
						}}
					>
						like
					</Text>
					<Text
						style={{
							marginLeft: 20,
						}}
					>
						comment
					</Text>
					<Text
						style={{
							marginLeft: 20,
						}}
					>
						send
					</Text>
				</View>
				<View style={styles.saveBtn}>
					<Text>save</Text>
				</View>
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
		alignItems: 'center',
	},
	contentContainer: {
		backgroundColor: 'blue',
		maxHeight: 400,
	},
	usageContainer: {
		backgroundColor: 'red',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 10,
	},
	usageOptions: {
		flexDirection: 'row',
	},
	saveBtn: {
		marginRight: 20,
	},
	comments: {
		backgroundColor: 'purple',
	},
})

export default PostItem
