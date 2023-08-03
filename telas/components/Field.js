import { StyleSheet, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default (props) => {

    return(
        <View style={styles.container}>
            <View style={styles.icone}>
                <Icon name= {props.icon} size={20} color= 'white' /> 
            </View>
            <View style={styles.texto}>
            <TextInput placeholder = {props.label} autoComplete='email' keyboardType='email-address'></TextInput>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1.9,
        borderBottomColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        width: 200,
        height: 30,
        paddingTop: 2,
        paddingBottom: 1,
        marginTop: 20
    },

    icone:{
        paddingRight: 5,
        paddingBottom: 5
    },

    texto:{
        width: 150,
        color: 'white',
        paddingBottom: 1,
        paddingLeft:50,
        paddingTop:3,
    }

})