import { View, Text, StyleSheet } from "react-native";


export default function AddLanche(){
    return(
        <View style={styles.container}>
            <Text>Adicionar Lanche</Text>
        </View>
    )}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }
})