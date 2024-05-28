import { View, Text, StyleSheet } from "react-native";

type UserTargetProps = {
    text: string;
    value: string;
}

export default function UserTarget({ text, value }: UserTargetProps) {
    return (
        <View>
            <Text style={styles.targetText}>
                <View style={styles.targetContainer}>
                    <Text style={styles.targetText}>
                        {text}
                    </Text>
                    <Text style={styles.target}>
                        {value}
                    </Text>
                </View>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    targetText: {
        color: '#FFF',
        fontSize: 22,
        fontFamily: 'Montserrat_500Medium',
    },
    targetContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    target: {
        fontSize: 26,
        marginLeft: 10,
        fontFamily: 'Montserrat_900Black',
        color: '#FFF'
    },
});
