import { StyleSheet, View } from 'react-native';
import BottomBarIcon from './BottomBarIcon';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import { useBottomBar } from '../contexts/BottomBarContext';

type NavigationProp = StackNavigationProp<RootStackParamList>;

export default function BottomBar() {
	const navigation = useNavigation<NavigationProp>();
	const { selectedButton, setSelectedButton } = useBottomBar();

	const handleClickProfile = () => {
		setSelectedButton('user');
		navigation.navigate('HomePage');
	};
	const handleClickMyEvolution = () => {
		setSelectedButton('graph');
	};
	const handleClickStartTrain = () => {
		setSelectedButton('fitness-center');
		navigation?.navigate('StartTraining');
	};
	const handleClickAddTrain = () => {
		setSelectedButton('diff-added');
	};
	const handleClickManageTrain = () => {
		setSelectedButton('edit');
	};

	return (
		<View style={styles.bottomBar}>
			<BottomBarIcon
				IconType={Feather}
				icon="user"
				selected={selectedButton === 'user'}
				onPress={handleClickProfile}
			/>
			<BottomBarIcon
				IconType={Octicons}
				icon="graph"
				selected={selectedButton === 'graph'}
				onPress={handleClickMyEvolution}
			/>
			<BottomBarIcon
				IconType={MaterialIcons}
				icon="fitness-center"
				selected={selectedButton === 'fitness-center'}
				onPress={handleClickStartTrain}
			/>
			<BottomBarIcon
				IconType={Octicons}
				icon="diff-added"
				selected={selectedButton === 'diff-added'}
				onPress={handleClickAddTrain}
			/>
			<BottomBarIcon
				IconType={Feather}
				icon="edit"
				selected={selectedButton === 'edit'}
				onPress={handleClickManageTrain}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	bottomBar: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		width: '100%',
		height: 60,
		backgroundColor: '#2C1753',
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
	},
});
