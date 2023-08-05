import { StyleSheet, View, Text, Image, TouchableOpacity as TO, ScrollView } from 'react-native';
import Field from '../components/Field';
import Cadastro from '../components/Cadastro';
import NomeCadastro from '../components/NomeCadastro';

export default function Register(){
    return(
        <ScrollView style={styles.container}>
            <View style={styles.superior}>
                <Image style={styles.imagem} source={require('../assets/CadastroVerde.png')}/>
            </View>
            <View style={styles.meio}>
                <NomeCadastro namee='NOME'/>
                <Cadastro label='Digite seu nome'/>
                <NomeCadastro namee='CPF'/>
                <Cadastro label='Digite seu CPF'/>
                <NomeCadastro namee='E-MAIL'/>
                <Cadastro label='Digite seu e-mail'/>
                <NomeCadastro namee='CELULAR'/>
                <Cadastro label='Digite seu celular'/>
                <NomeCadastro namee='SENHA'/>
                <Cadastro label='Digite sua senha'/>
                <NomeCadastro namee='CONFIRME SUA SENHA'/>
                <Cadastro label='Digite sua senha novamente'/>
                <NomeCadastro namee='DATA DE NASCIMENTO'/>
                <Cadastro label='Digite sua data de nascimento'/>
            </View>
            <View style={styles.rodape}>
                <TO style={styles.registerButton}>
                    <Text style={styles.registerButtonText}>
                        CADASTRAR
                    </Text>
                </TO>
            </View>
        </ScrollView>
    );

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
        marginTop: 80
    },
    meio:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:60
    },
    rodape:{
        flex:1,
        marginTop: 100
    },
    
    registerButton:{
        padding: 4,
        height: '15%',
        width: 130,
        height:40,
        backgroundColor: '#00BF63',
        justifyContent: 'center',
        borderRadius: 40,
        alignSelf: 'center',
         marginTop: 80,
    },
    registerButtonText:{
        fontWeight: 'bold',
        fontSize:20,
        color: '#6D458B',
        textAlign: 'center',
    }

})

