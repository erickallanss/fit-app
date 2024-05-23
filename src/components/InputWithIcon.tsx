import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import colors from '../utils/colors';

interface InputWithIconProps {
    IconType: any;
    icon: any;
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
}

const InputWithIcon = ({ IconType, icon, placeholder, value, onChangeText }: InputWithIconProps) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor={colors.grayInputPlaceholder}
            />
            <IconType style={styles.icon} name={icon} size={24} color="white" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        height: 48,
        backgroundColor: colors.grayInput,
        borderRadius: 20,
        paddingHorizontal: 16,
        marginBottom: 16,
        color: '#FFF',
    },
    input: {
        height: 48,
        flex: 1,
        borderRadius: 20,
        color: '#FFF',
    },
    icon: {},
});

export default InputWithIcon;
