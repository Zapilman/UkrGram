import React, { useState } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import StoryItem from '../../../../components/StoryItem/StoryItem'

interface StoryProps {
	id: number
	name: string
}

const Stories = () => {
	const [countOfStories, setCountOfStories] = useState<StoryProps[]>([
		{ id: 0, name: 'asda' },
		{ id: 1, name: 'asda' },
		{ id: 2, name: 'asda' },
		{ id: 3, name: 'asda' },
		{ id: 4, name: 'asda' },
		{ id: 5, name: 'asda' },
		{ id: 6, name: 'asda' },
	])

	return (
		<View style={styles.container}>
			<FlatList
				showsHorizontalScrollIndicator={false}
				horizontal
				data={countOfStories}
				renderItem={item => {
					return (
						<StoryItem
							customStyle={{ marginLeft: item.item.id == 0 ? 0 : 20 }}
						/>
					)
				}}
				keyExtractor={item => item.id.toString()}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'yellow',
		padding: 20,
		alignItems: 'center',
		flexDirection: 'row',
	},
})

export default Stories
