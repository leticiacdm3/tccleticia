import { StyleSheet, Text, View, Image, TouchableOpacity, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import Splash from './Splash'
import { useNavigation, useRouter } from 'expo-router';



export default function index() {

  const nav = useNavigation();
  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
  });

  const imgSource = require('../assets/logoescuro.png')

  if (fontsLoaded && imgSource) {
    return (
      <>

        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[styles.darkbg, styles.container]}>

          <Text style={styles.snack}>SEJA BEM-VINDO</Text>
          <View style={styles.tela}>
            <TouchableOpacity style={styles.registerButton} onPress={() => nav.navigate('Register')}>
              <Text style={styles.registerButtonText}>CADASTRAR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.enterButton} onPress={() => {nav.navigate('entrar');console.log('socorroooo')}}>
              <Text style={styles.enterButtonText}>ENTRAR</Text>
            </TouchableOpacity>

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
    backgroundColor: '#6D458B'
  },
  snack: {
    fontFamily: 'Montserrat-Regular',
    color: '#00BF63',
    fontSize: 35,
    paddingTop: 300
  },
  registerButton: {
    padding: 4,
    height: 40,
    width: 300,
    backgroundColor: '#00BF63',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'flex-end',
    borderRadius: 10
  },
  registerButtonText: {
    fontSize: 20,
    color: '#6D458B',
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular'
  },
  enterButton: {
    padding: 4,
    height: 40,
    width: 300,
    backgroundColor: '#AE7CD4',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 50,
    alignSelf: 'flex-end',
    borderRadius: 10,

  },
  enterButtonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular'
  },
  tela: {
    justifyContent: 'flex-end',
    flex: 1
  }

})
