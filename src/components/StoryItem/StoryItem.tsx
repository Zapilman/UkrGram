import React, { FC } from 'react'
import { Pressable, Text, View, StyleSheet } from 'react-native'

interface Props {
	customStyle?: object
}

interface Props {}
const StoryItem: FC<Props> = ({ customStyle = {} }: Props) => {
	return (
		<View>
			<Pressable onPress={() => console.log('hi')}>
				<View style={[styles.story, customStyle]} />
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	story: {
		width: 50,
		height: 50,
		backgroundColor: 'black',
		borderRadius: 100,
	},
})

export default StoryItem
