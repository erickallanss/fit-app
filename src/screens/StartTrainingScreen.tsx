import { StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../../App';
import { StackNavigationProp } from '@react-navigation/stack';
import BackgroundImage from '../components/BackgroundImage';

type StartTrainingScreenProps = {
	navigation: StackNavigationProp<RootStackParamList, 'StartTraining'>;
};

const userTraining = [
	{
		id: 1,
		name: 'Peito / Ant Ombro / Tríceps',
		created_at: '2024-06-18',
		rest: 40,
		exercises: [
			{
				id: 1,
				name: 'Esteira',
				type: 'aerobic',
				lastDuration: 10,
				lastDistance: 0,
			},
			{
				id: 2,
				name: 'Desenvolvimento com Halteres',
				type: 'muscle',
				lastSeries: 3,
				lastRepetitions: 12,
				lastWeight: 12,
			},
			{
				id: 3,
				name: 'Tríceps Pulley',
				type: 'muscle',
				lastSeries: 3,
				lastRepetitions: 12,
				lastWeight: 12,
			},
		],
	},
];

export const StartTrainingScreen = ({
	navigation,
}: StartTrainingScreenProps) => {
	return (
		<View style={styles.container}>
			<BackgroundImage />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	userInfo: {
		width: '100%',
		marginTop: 50,
		color: '#FFF',
	},
	userNameText: {
		marginLeft: 30,
		fontSize: 28,
		fontFamily: 'Montserrat_700Bold',
		color: '#FFF',
	},
	screenButtons: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
	},
});
