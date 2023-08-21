import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useState } from 'react';
export default (props) => {

    const [hidePass, setHidePass] = useState(true);

    return (
        <View style={styles.container}>
            <View style={styles.texto}>
            <Text style={styles.texti}> {props.labelpass} </Text>
                <TextInput
                    paddingTop={9} 
                    paddingLeft={4}
                    placeholderTextColor={'white'}
                    color='white'
                    value={props.pass}
                    onChangeText={(text) => props.setPass(text)}
                    secureTextEntry={hidePass}
                />

            </View>
            <TouchableOpacity style={styles.senhaVisivel} onPress={() => setHidePass(!hidePass)}>
                {hidePass ?
                    <Icon name='eye' size={18} color='white' />
                    :
                    <Icon name='eye-slash' size={18} color='white' />
                }

            </TouchableOpacity>
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
            selectionColor: 'white',
    
        },
        texti:{
            color: 'white',
            
        },
        senhaVisivel: {
            marginLeft: 7,
            paddingTop: 10
        },
    
    })

    
