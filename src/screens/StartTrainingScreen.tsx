import { StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../../App';
import { StackNavigationProp } from '@react-navigation/stack';
import BackgroundImage from '../components/BackgroundImage';
import PrimaryButton from '../components/PrimaryButton';
import CustomizableButton from '../components/CustomizableButton';
import colors from '../utils/colors';
import BottomBar from '../components/BottomBar';

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
	{
		id: 2,
		name: 'Dorsal / Post Ombro / Bíceps',
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
	{
		id: 3,
		name: 'Perna / Abs ',
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
			<View style={styles.trainingHeader}>
				<Text style={styles.trainingHeaderText}>
					Escolha um treino para continuar
				</Text>
			</View>
			<View style={styles.trainings}>
				{userTraining.length > 0 ? (
					userTraining.map((training) => (
						<PrimaryButton
							key={training.id}
							title={training.name}
							onPress={() => alert('clicou')}
						/>
					))
				) : (
					<View>
						<Text style={styles.trainingAlertText}>
							Nenhum treino cadastrado.
						</Text>
						<Text style={styles.trainingAlertText}>
							Cadastre pelo menos um treino para continuar.
						</Text>
					</View>
				)}
			</View>
			<View style={styles.screenButtons}>
				<CustomizableButton
					title="Adicionar novo treino"
					bgColor="#FFF"
					textColor={colors.mainPurple}
					onPress={() => alert('Adicionar novo treino')}
				/>

				<CustomizableButton
					title="Gerenciar meus treinos"
					bgColor={colors.grayInput}
					textColor="#FFF"
					onPress={() => alert('Clicou')}
				/>
			</View>
			<BottomBar />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	trainingHeader: {
		width: '100%',
		marginTop: 50,
		color: '#FFF',
	},
	trainingHeaderText: {
		fontSize: 24,
		fontFamily: 'Montserrat_700Bold',
		color: '#FFF',
		textAlign: 'center',
	},
	trainingAlertText: {
		fontSize: 16,
		fontFamily: 'Montserrat_500Medium',
		color: '#FFF',
		textAlign: 'center',
	},
	userNameText: {
		marginLeft: 30,
		fontSize: 28,
		fontFamily: 'Montserrat_700Bold',
		color: '#FFF',
	},
	trainings: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
	},
	screenButtons: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
	},
});
