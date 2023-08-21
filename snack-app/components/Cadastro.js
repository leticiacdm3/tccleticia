import { StyleSheet, View, TextInput, Text } from 'react-native';
export default (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.texto}>
            <Text style={styles.texti}> {props.label} </Text>
                <TextInput value={props.text} onChangeText={(text) => props.setText(text)} paddingTop={9} paddingLeft={4} color='white' ></TextInput>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: '9%',
        marginTop: 20,
        marginBottom: 15
    },

    texto: {
        color: 'white',
        flex: 2,
        selectionColor: 'white'

    },
    texti:{
        color: 'white',
        
    }

})
