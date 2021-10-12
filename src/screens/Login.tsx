import React, { useState } from 'react';
import { View, Image, StyleSheet, 
TextInput, TouchableOpacity, SafeAreaView,
Text} from 'react-native';

import { useNavigation } from '@react-navigation/core';

import BoxMarketLogo from '../icons/BoxMarketLogo.png'

export function Login() {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const validar = () => {
    return function () {
      console.log(user, password)
      console.log(`User: ${user}  Senha: ${password}`),

      navigation.navigate('ListaMercados')
    }
  }
  
    const navigation = useNavigation();

    function listaMercados() {
      console.log(`User: ${user}  Senha: ${password}`),

      navigation.navigate('ListaMercados')
    }
    
    function cadastro() {
      navigation.navigate('Cadastro')
    }


    return (
      <SafeAreaView style={styles.container}> 
      
      <View style={styles.container1}>
        <Image style={styles.logoBox}
          source={BoxMarketLogo}/>
      </View>

      <View style={styles.container2}>
        <View style={styles.inputs}>
          <TextInput
          style={styles.input}
            autoCorrect={false}
            placeholder={'Usuário'}
            placeholderTextColor= 'black'
            onChangeText={text => setUser(text)}
            value={user}
          />
          
          <TextInput
          style={styles.input}
            secureTextEntry={true}
            placeholder={'Senha'}
            placeholderTextColor= 'black'
            autoCorrect={false}
            onChangeText={text => setPassword(text)}
            value={password}
          />
        </View>

            <TouchableOpacity style={styles.buttonPasswordRecuperar}
              onPress={() => alert("Em construção XD")}>
              <Text style={styles.passwordRec}>Esqueci minha senha</Text>
            </TouchableOpacity>
          
            <TouchableOpacity style={styles.buttonsEntrar}
              onPress={listaMercados}>
              <Text style={styles.buttonEntrarText}>
                Entrar</Text>
            </TouchableOpacity>

            
      </View>
   

        <View style={styles.buttonCad}>
          <TouchableOpacity style={styles.buttonsCad}
            onPress={cadastro}>
            <Text style={styles.buttonCadText}>
              Cadastre-se</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  
    container:{
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#EAEAEA'
    },
  
    container1: {
      backgroundColor: '#104032',
      width: '100%',
      height: 350,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -50,
    },
  
    logoBox: {
      width: 190,
      height: 230,
      marginTop: -15,
    },

    container2:{ 
      backgroundColor: "#FFFFFF",
      width: 325,
      height: 310,
      borderRadius: 7,
      elevation: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -60,
      marginLeft: 18,
      marginRight: 10, 
    },

    inputs: {
      marginTop: 30,
    },

    input: {
      backgroundColor: '#EAEAEA',
      width: 300,
      height: 50,
      fontSize: 18,
      fontFamily: 'Nunito_600SemiBold',
      color: 'black',
      marginBottom: 15,
      borderRadius: 27,
      borderWidth: 0.4,
      borderColor: 'black',
      padding: 10,
    },
  
    buttonsEntrar: {
      backgroundColor: '#268C6F',
      width: 220,
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
      marginTop: 50,
      borderRadius: 30,
    },

    buttonEntrarText: {
      color: '#ffff',
      fontSize: 20,
      fontFamily: 'Nunito_700Bold',
    },

    buttonPasswordRecuperar: {
      alignItems: 'center',
      marginBottom: -30,
      marginRight: 155
    },

    passwordRec: {
      fontFamily: 'Nunito_600SemiBold',
      color: '#211F1F',
      textAlign: 'center',
      marginBottom: 40,
    },

    buttonCad: {
      alignItems: 'center',
      justifyContent: 'center',
    },

    buttonsCad: {
      backgroundColor: '#EAEAEA',
      width: 193,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 80,
      borderWidth: 1,
      borderColor: '#268C6F'
    },

    buttonCadText: {
      fontFamily: 'Nunito_600SemiBold',
      color: '#268C6F',
      fontSize: 16,
      justifyContent: 'center',
    },

  })

  