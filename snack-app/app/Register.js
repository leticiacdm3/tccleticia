import { StyleSheet, View, Text, TouchableOpacity as TO, ScrollView, KeyboardAvoidingView, } from 'react-native';
import CheckBox from 'expo-checkbox';
import Cadastro from '../components/Cadastro';
import { useFonts } from 'expo-font';
import Splash from './Splash';
import { useNavigation } from 'expo-router';
import { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome5';
import SenhaCadastro from '../components/SenhaCadastro';
import { emailLogin, auth, createUser, signOutFirebase } from "../connections_leticia/firebase-auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from "expo-router";


export default function Register() {
    const [fontsLoaded] = useFonts({
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
        'LisuBosa-Regular': require('../assets/fonts/LisuBosa-Regular.ttf'),
    });

    const nav = useNavigation();
    const [isChecked, setChecked] = useState(false);
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [passC, setPassC] = useState('');
    const [user, setUser] = useState(null)
    const tryCreateUser = async () => {
        createUser(email, pass, "Nome da pessoa");
      }

    if (fontsLoaded) {
        return (
            <>
                <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
                    <ScrollView>
                        <View style={styles.superior}>
                            <TO style={styles.voltar}>
                                <Icon name={'chevron-left'} size={30} color='#AE7CD4' onPress={() => nav.navigate('index')}/>
                            </TO>
                            <Text style={styles.textCadastro}> CADASTRO </Text>
                        </View>
                        <View style={styles.meio}>
                            
                            <Cadastro label='Digite seu nome:' />
                            <Cadastro label='Digite seu CPF:' />
                            <Cadastro label='Digite sua data de nascimento:' />
                            <Cadastro value={email} onChangeText={setEmail=>(t)} label='Digite seu e-mail:' />
                            <Cadastro label='Digite seu celular:' />
                            <SenhaCadastro  value={pass} onChangeText={setPass=>(t)} labelpass='Digite sua senha:' />
                            <SenhaCadastro labelpass='Digite sua senha novamente:' />
                        </View>
                        <View style={styles.rodape}>
                            <View style={styles.vTermos}>
                                <CheckBox
                                    style={styles.checkbox}
                                    disabled={false}
                                    value={isChecked}
                                    onValueChange={(setChecked)}
                                />
                                <Text style={styles.tdu}>Li e concordo com os </Text>
                                <TO onPress={() => nav.navigate('Termos')}><Text style={styles.termo}>Termos de Uso</Text></TO>
                            </View>
                            <TO onPress={tryCreateUser} style={styles.registerButton}>
                                <Text style={styles.registerButtonText}>
                                    CADASTRAR
                                </Text>
                            </TO>
                        </View>

                        <View style={styles.naoPossui}>
                            <Text style={styles.notYet}> Já possui conta? </Text>
                            <TO onPress={() => nav.navigate('Entrar')}>
                                <Text style={styles.naoPossuiCadastre}>ENTRE</Text>
                            </TO>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </>
        );

    }
    else {
        return <Splash />
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6D458B',
    },

    superior: {
        paddingBottom: 30,
        flexDirection: 'row',
        marginTop: 50,
        
    },
    meio: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
        marginRight:30,
        marginLeft:30,
        paddingBottom: 40,
        backgroundColor: '#714990'
    },
    rodape: {
        flex: 1,
        marginTop: 50
    },

    registerButton: {
        padding: 4,
        height: 40,
        width: 200,
        backgroundColor: '#00BF63',
        justifyContent: 'center',
        borderRadius: 50,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 50
    },
    registerButtonText: {
        fontWeight: '400',
        fontSize: 20,
        color: '#6D458B',
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular'
    },
    textCadastro: {
        fontSize: 40,
        color: '#00bf63',
        fontFamily: 'Montserrat-Regular',
        marginTop: 30
    },
    notYet: {
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Montserrat-Regular'
    },
    naoPossuiCadastre: {
        color: '#00BF63',
        fontSize: 20,
        fontFamily: 'Montserrat-Regular'
    },
    naoPossui: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30
    },
    tdu: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'Montserrat-Regular'
    },
    termo: {
        color: '#00BF63',
        fontSize: 15,
        fontFamily: 'Montserrat-Regular'
    },
    vTermos: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkbox: {
        margin: 8,
    },
    voltar: {
        paddingBottom: 30,
        JustifyContent: 'left',
        marginRight: 40,
        marginLeft:30,
        height: '100%',
        paddingTop: 40

    }

})

