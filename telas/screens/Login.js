import { StyleSheet, Text, View, Image,TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import {useState} from 'react';
import Field from '../components/Field';

export default function Login() {
  const [userMessage, setUserMessage] = useState(false)
  return (
    <>
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[styles.darkbg, styles.container]}>
    <View style= {styles.container}>
    <View>
        <Image style={styles.image}source={require('../assets/logoescuro.png')}/>
    </View>
    <View>
      {
        userMessage ? <Text style={styles.loginMsg}>Usuário ou senha inválido</Text> : null
      }
      
    </View>
    <View style={styles.loginForm}>
        <Field label='E-MAIL' icon= 'user-alt'/>
        <Field label= 'SENHA' icon= 'lock'/>
        <TouchableOpacity 
        onPress={()=>setUserMessage(true)}
        style={styles.loginButton}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
    </View>
    </View>
    </KeyboardAvoidingView>
    
     

    </>
  );}
     const styles = StyleSheet.create({

      container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      image:{
        width: 164,
        height: 50,
        resizeMode: 'contain'
      },
      darkbg:{
        backgroundColor: '#6D458B'
      },
      loginMsg:{
        fontWeight: 'bold',
        fontSize: 14,
        color: '#fff',
        marginTop: 10,
        marginBottom:9,
      },
      loginForm:{
        width:'80%'
      },
      loginInput:{
        backgroundColor: '#fff',
        fontSize: 20,
        padding: 7,
        marginBottom: 15
      },
      loginButton:{
        padding: 4,
        height: '30%',
        width: '60%',
        backgroundColor: '#00BF63',
        justifyContent: 'center',
        borderRadius: 30,
        alignSelf: 'center',
        marginTop: 40


      },
      loginButtonText:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#6D458B',
        textAlign: 'center'
      }
     })
