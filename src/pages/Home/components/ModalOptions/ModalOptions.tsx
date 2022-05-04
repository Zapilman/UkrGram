import { Modal, View, Text, StyleSheet, Button, Alert } from 'react-native'

const ModalOptions = () => {
	return (
		<Modal
			transparent={true}
			visible={false}
			animationType='slide'
			onRequestClose={() => {
				Alert.alert('Modal has been closed.')
			}}
		>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<Text>text</Text>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
		marginTop: 22,
	},
	modalView: {
		width: '100%',
		height: 200,
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
})

export default ModalOptions
