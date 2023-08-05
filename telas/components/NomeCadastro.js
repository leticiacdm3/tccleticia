import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
export default (props) => {

    return(
        <View style={styles.container}>
            <View style={styles.texto}>
                <Text>{props.namee}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        height: '11%',

    },

    texto:{
        paddingLeft:4,
        paddingTop:7,
        flex:2,
        fontSize: 50


    },

})