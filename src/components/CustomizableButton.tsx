import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface CustomizableButtonProps {
	title: string;
	bgColor: string;
	textColor: string;
	onPress: () => void;
}

const CustomizableButton = ({
	title,
	bgColor,
	textColor,
	onPress,
}: CustomizableButtonProps) => {
	return (
		<TouchableOpacity
			style={[styles.button, { backgroundColor: bgColor }]}
			onPress={onPress}
		>
			<Text style={[styles.buttonText, { color: textColor }]}>
				{title}
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		width: '80%',
		height: 48,
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10,
	},
	buttonText: {
		fontSize: 16,
		fontWeight: 'bold',
	},
});

export default CustomizableButton;
