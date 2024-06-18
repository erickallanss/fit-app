import { View, Text, StyleSheet } from 'react-native';
import colors from '../utils/colors';

type UserTargetProps = {
	text: string;
	value: string;
	unit?: string;
};

export default function UserTarget({ text, value, unit }: UserTargetProps) {
	return (
		<View>
			<Text style={styles.goalsText}>
				<View style={styles.targetContainer}>
					<Text style={styles.textStyle}>{text}</Text>
					{unit ? (
						<Text style={styles.target}>
							{value} {unit}
						</Text>
					) : (
						<Text style={styles.target}>{value}</Text>
					)}
				</View>
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	targetContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	textStyle: {
		fontSize: 18,
	},
	target: {
		fontSize: 18,
		fontFamily: 'Montserrat_900Black',
		color: '#FFF',
		backgroundColor: colors.mainPurple,
		padding: 5,
		borderRadius: 5,
		marginLeft: 5,
	},
	goalsText: {
		color: colors.mainPurple,
		fontSize: 20,
		fontFamily: 'Montserrat_700Bold',
		marginBottom: 2,
		backgroundColor: '#FFF',
		borderRadius: 5,
		padding: 5,
	},
});
