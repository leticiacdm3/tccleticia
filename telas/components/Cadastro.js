import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
export default (props) => {

    return(
        <View style={styles.container}>
            <View style={styles.texto}>
            <TextInput placeholder = {props.label}   placeholderTextColor={'white'} color='white' ></TextInput>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 0.5,
        borderColor: '#D8A7FD',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        height: '11%',
        marginBottom: 5,
        backgroundColor: '#ae7cd4'
    },

    texto:{
        paddingLeft:4,
        flex:2,
        selectionColor: 'white',


    },

})
