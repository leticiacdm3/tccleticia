import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useNavigation, useRouter } from 'expo-router';
import { AntDesign, SimpleLineIcons, Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function AddLanche(){
    const nav = useNavigation();
    return(
        <View style={styles.container}>
            
            <View style={styles.voltar}> 
            <TouchableOpacity >
                    <Icon name={'chevron-left'} size={30} color='#AE7CD4' onPress={() => nav.navigate('Cardapio')} />
                </TouchableOpacity>
            </View>

            <View style={styles.meio}>
            <TextInput style={styles.input} placeholder="Nome do lanche"  />
            <TextInput style={styles.inputDesc} placeholder="Descrição" />
            <TextInput style={styles.input} placeholder="Preço" />
            <TouchableOpacity style={styles.botImg}>
                <Text style={styles.textoBotao}>Adicionar imagem</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.textoBotao}>Adicionar</Text>
            </TouchableOpacity>
            </View>
        </View>
    )}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    voltar: {    
        paddingBottom: 30,
        marginRight: 50,
        marginLeft: 30,
        alignSelf: 'left',
        paddingTop: 90,
        flex: 1,
    },
    inputDesc:{

    }
})