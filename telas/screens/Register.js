import { StyleSheet, View, Text, TouchableOpacity as TO, ScrollView, KeyboardAvoidingView } from 'react-native';
import Cadastro from '../components/Cadastro';
import NomeCadastro from '../components/NomeCadastro';
import { useFonts } from 'expo-font';
import Splash from './Splash';

export default function Register(){
    const [fontsLoaded] = useFonts ({
        'Montserrat-Regular': require ('../assets/fonts/Montserrat-Regular.ttf'),
        'LisuBosa-Regular': require ('../assets/fonts/LisuBosa-Regular.ttf'),
      });
      
      if(fontsLoaded){
    return(
        <>
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
        <ScrollView>
            <View style={styles.superior}>
                <Text style={styles.textCadastro}> CADASTRO </Text>
            </View>
            <View style={styles.meio}>
                <NomeCadastro namee='NOME'/>
                <Cadastro label='Digite seu nome'/>
                <NomeCadastro namee='CPF'/>
                <Cadastro label='Digite seu CPF'/>
                <NomeCadastro namee='DATA DE NASCIMENTO'/>
                <Cadastro label='Digite sua data de nascimento'/>
                <NomeCadastro namee='E-MAIL'/>
                <Cadastro label='Digite seu e-mail'/>
                <NomeCadastro namee='CELULAR'/>
                <Cadastro label='Digite seu celular'/>
                <NomeCadastro namee='SENHA'/>
                <Cadastro label='Digite sua senha'/>
                <NomeCadastro namee='CONFIRME SUA SENHA'/>
                <Cadastro label='Digite sua senha novamente'/>
            </View>
            <View style={styles.rodape}>
                <TO style={styles.registerButton}>
                    <Text style={styles.registerButtonText}>
                        CADASTRAR
                    </Text>
                </TO>
                </View>

                <View style={styles.naoPossui}>
                    <Text style={styles.notYet}> Já possui conta? </Text>
                    <TO>
                    <Text style={styles.naoPossuiCadastre}>ENTRE</Text>
                    </TO>
                </View>
        </ScrollView>
        </KeyboardAvoidingView>
        </>
    );

}
            else{
            return <Splash/>
            }
    
        }
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#6D458B'
    },
    
    superior:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 30,
        marginTop: 40
    },
    meio:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:80
    },
    rodape:{
        flex:1,
        marginTop: 100
    },
    
    registerButton:{
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
    registerButtonText:{
        fontWeight: '400',
        fontSize:20,
        color: '#6D458B',
        textAlign: 'center',
    },
    textCadastro:{
        fontSize: 40,
        color: '#00bf63',
        fontFamily: 'Montserrat-Regular'
    },
    notYet:{
        fontFamily: 'LisuBosa-Regular',
        fontSize: 20,
        color: '#fff'
      },
      naoPossuiCadastre:{
        color: '#00BF63',
        fontFamily: 'LisuBosa-Regular',
        fontSize: 20,
      },
      naoPossui:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30

      },

})

