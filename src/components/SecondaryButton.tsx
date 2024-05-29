import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type SecondaryButtonProps = {
	mainText: string;
	clickableText: string;
	onPress: () => void;
};

const SecondaryButton = ({
	mainText,
	clickableText,
	onPress,
}: SecondaryButtonProps) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<Text style={styles.secButton}>
				<Text style={styles.secButtonText}>{mainText} </Text>
				<Text style={styles.secButtonText2}>{clickableText}</Text>
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	secButton: {
		marginTop: 20,
		color: '#FFF',
		fontSize: 16,
		textAlign: 'right',
	},
	secButtonText: {
		fontWeight: 'regular',
	},
	secButtonText2: {
		textDecorationLine: 'underline',
		fontWeight: 'bold',
	},
});

export default SecondaryButton;
