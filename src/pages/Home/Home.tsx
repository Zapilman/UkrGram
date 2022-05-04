import {
	FlatList,
	Modal,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import React, { FC, useState } from 'react'
import HomeHeader from './components/HomeHeader/HomeHeader'
import Stories from './components/Stories/Stories'
import PostItem from '../../components/PostItem/PostItem'
import ModalOptions from './components/ModalOptions/ModalOptions'

const Home: FC = () => {
	const [countOfPosts, setCountOfPosts] = useState<number>(8)

	return (
		<View style={styles.container}>
			<ModalOptions />
			<HomeHeader />
			<Stories />
			<View
				style={{
					flex: 8,
				}}
			>
				{/* <ScrollView>
					{[...Array(countOfPosts).keys()].map((el: number) => {
						return <PostItem />
					})}
				</ScrollView> */}
				<FlatList
					data={[...Array(10).keys()]}
					renderItem={item => <PostItem />}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'stretch',
		justifyContent: 'center',
	},
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: '#F194FF',
	},
	buttonClose: {
		backgroundColor: '#2196F3',
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	modalText: {
		marginBottom: 15,
		textAlign: 'center',
	},
})

export default Home
