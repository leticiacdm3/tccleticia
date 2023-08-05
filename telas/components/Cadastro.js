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
        borderWidth: 3,
        borderColor: '#D8A7FD',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        height: '11%',
        paddingTop: 0,
        paddingBottom: 1,
        //marginTop: 20,
        backgroundColor: '#ae7cd4'
    },

    texto:{
        paddingBottom: 0,
        paddingLeft:4,
        paddingTop:7,
        paddingBottom:7,
        flex:2,
        selectionColor: 'white',


    },

})
