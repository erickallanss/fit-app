import { View, Text } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import ButtonWithIcon from '../components/ButtonWithIcon';
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { RootStackParamList } from '../../App';
import { StackNavigationProp } from '@react-navigation/stack';
import BottomBar from '../components/BottomBar';
import UserTarget from '../components/UserTarget';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import colors from '../utils/colors';

type HomePageScreenNavigationProps = {
	navigation: StackNavigationProp<RootStackParamList, 'HomePage'>;
};

export default function HomePageScreen({
	navigation,
}: HomePageScreenNavigationProps) {
	const UserContextValues = useContext(UserContext);
	const name = UserContextValues?.name;
	const currentWeight = UserContextValues?.currentWeight.toString() ?? '0';
	const weekGoal = UserContextValues?.weekGoal.toString() ?? '0';
	const consecutiveWeeks =
		UserContextValues?.consecutiveWeeks.toString() ?? '0';

	const handleStartTraining = () => {
		navigation.navigate('StartTraining');
	};

	const handleManageTraining = () => {
		alert('Ive clicked in manage training');
	};

	const handleMyEvolution = () => {
		alert('Ive clicked in my evolution');
	};

	return (
		<View style={styles.container}>
			<BackgroundImage />
			<StatusBar style="auto" />
			<View style={styles.userInfo}>
				<View>
					<Text style={styles.userNameText}>
						Olá, {name?.toLocaleUpperCase()}
					</Text>
				</View>
				<View style={styles.userTargets}>
					<Text style={styles.targetHeader}>Seu resumo semanal</Text>
					<UserTarget
						text="Você está com"
						value={currentWeight}
						unit="kg"
					/>
					<UserTarget text="Treinos concluídos:" value={weekGoal} />
					<UserTarget
						text="Semanas seguidas de treino:"
						value={consecutiveWeeks}
					/>
				</View>
			</View>
			<View style={styles.screenButtons}>
				<ButtonWithIcon
					IconType={MaterialIcons}
					icon="fitness-center"
					title="Iniciar treino"
					onPress={handleStartTraining}
				/>

				<ButtonWithIcon
					IconType={Feather}
					icon="edit"
					title="Gerenciar treinos"
					onPress={handleManageTraining}
				/>

				<ButtonWithIcon
					IconType={Octicons}
					icon="graph"
					title="Minha evolução"
					onPress={handleMyEvolution}
				/>
			</View>
			<BottomBar />
		</View>
	);
}

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
		fontSize: 26,
		fontFamily: 'Montserrat_700Bold',
		color: '#FFF',
	},
	userTargets: {
		display: 'flex',
		alignItems: 'flex-end',
		marginRight: 30,
		marginTop: 100,
	},
	targetHeader: {
		color: '#FFF',
		fontSize: 24,
		fontFamily: 'Montserrat_900Black',
		marginBottom: 10,
		backgroundColor: colors.mainPurple,
		borderRadius: 5,
		padding: 5,
	},
	screenButtons: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
	},
});
