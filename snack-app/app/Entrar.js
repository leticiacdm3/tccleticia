import { StyleSheet, Text, View, Image, TouchableOpacity, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import { useState } from 'react';
import Field from '../components/Field';
import { useFonts } from 'expo-font';
import Splash from './Splash'
import Password from '../components/Password';
import { useNavigation } from 'expo-router';
import { emailLogin } from '../auth/emailAuth';
import Casa from './Casa'

export default function Entrar() {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [userMessage, setUserMessage] = useState(false);

  const nav = useNavigation();

  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
  });

  const imgSource = require ('../assets/logoescuro.png')

  if (fontsLoaded && imgSource) {
    return (
      <>

        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[styles.darkbg, styles.container]}>
          <View style={styles.container}>
            <View>
                <Image style={styles.image} source={imgSource} />
            </View>

            <View style={styles.inferior}>
              <View>
                {
                  userMessage ? <Text style={styles.loginMsg}>Usuário ou senha inválido</Text> : null
                }

              </View>

              <View style={styles.loginForm}>
                <Field label='E-MAIL' icon='user' email={email} setEmail={setEmail} />
                <Password labelpass='SENHA' ipassword='lock' pass={pass} setPass={setPass} />

                <TouchableOpacity
                  style={styles.loginButton}
                  onPress={() => {
                    emailLogin(email, pass)
                    console.log(email, pass)
                    nav.navigate('Casa')
                    setUserMessage(true)
                  }}
                  
                >

                  <Text style={styles.loginButtonText} >ENTRAR</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.forgotPassword}>
                  <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
                </TouchableOpacity>

                <View style={styles.naoPossui}>
                  <Text style={styles.notYet}>Ainda não possui conta? </Text>
                  <TouchableOpacity onPress={() => nav.navigate('Register')}>
                    <Text style={styles.naoPossuiCadastre}>CADASTRE-SE</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  notYet: {
    fontSize: 17,
    color: '#fff',
    fontFamily: 'Montserrat-Regular'
  },
  naoPossuiCadastre: {
    color: '#00BF63',
    fontSize: 17,
    fontFamily: 'Montserrat-Regular'
  },
  naoPossui: {
    flexDirection: 'row',
    paddingTop: 100,
  },
  forgotPassword: {
    marginTop: 7
  },
  forgotPasswordText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 17,
    color: '#AE7CD4'
  },
  superior: {
    height: '50%',
    width: '100%',
  },
  inferior: {
    height: '50%',
    width: '100%',
    marginBottom: 100
  },
  image: {
    width: 270,
    height: 80,
    resizeMode: 'contain',
    paddingBottom: 300,
    marginTop: 100
  },
  darkbg: {
    backgroundColor: '#6D458B'
  },
  loginMsg: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#fff',
    marginTop: 10,
    marginBottom: 0,
    alignSelf: 'center',
    fontFamily: 'Montserrat-Regular'
  },
  loginForm: {
    width: '80%',
    alignItems: 'center',
    fontFamily: 'Montserrat-Regular'
  },
  loginInput: {
    backgroundColor: '#fff',
    fontSize: 20,
    padding: 7,
    marginBottom: 15,
    fontFamily: 'Montserrat-Regular'
  },
  loginButton: {
    padding: 4,
    height: '15%',
    width: 110,
    height: 40,
    backgroundColor: '#00BF63',
    justifyContent: 'center',
    borderRadius: 40,
    alignSelf: 'center',
    marginTop: 40,
  },
  loginButtonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#6D458B',
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
  },
  

})
