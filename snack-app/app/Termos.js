import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function Termos() {

    const nav = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.voltar}>
                <Icon name={'chevron-left'} size={30} color='#AE7CD4' onPress={() => nav.navigate('Register')}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#6d458b',
        alignItems: 'center',
        justifyContent: 'center',
    },
    voltar: {
        paddingBottom: 30,
        JustifyContent: 'left',
        marginRight: 48,
        marginLeft:20,
        marginTop:100,
        height: '100%',
        alignSelf: 'left'

    }
})