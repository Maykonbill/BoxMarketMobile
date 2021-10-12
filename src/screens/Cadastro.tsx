import React, { useState } from 'react';
import { View, StyleSheet, 
TextInput, TouchableOpacity,
Text, StatusBar, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/core';

export function Cadastro() {

  const navigation = useNavigation();

  function listaMercados() {
    mostrarDados()
    navigation.navigate('ListaMercados')
  }

  function Login() {
    navigation.navigate('Login')
  }

  // var endereco = { rua: "", numero: "", complemento: "", bairro: "", cidade: "", cep: ""}
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [placa, setPlaca] = useState("");

  const mostrarDados = () =>  {
    alert('Vai pra tela da lista de mercados')
    console.log( `
    Nome:  ${nome},
    CPF:  ${cpf}, 
    Telefone: ${telefone}, 
    Email: ${email}, 
    Endereço: ${endereco},  
    Placa do veiculo: ${placa}`)
  }

    return (
      <ScrollView style={styles.container} >

        <StatusBar backgroundColor='#104032' barStyle='light-content' />

        <View style={styles.fundoCadastro}>
          
        <View style={styles.cadastro}></View>
          <Text style={styles.textCadastro}>Cadastro</Text>
          <TouchableOpacity style={styles.arrowLeft}>
            <AntDesign 
              name="arrowleft" 
              size={35} 
              color="white" 
              onPress={Login} 
            />
          </TouchableOpacity>
        </View>
        
        <Text style={styles.textButtons}>Nome completo</Text>
        <TextInput 
        style={styles.textInput}
          textContentType='name'
          autoCorrect={false} 
          onChangeText={text => setNome(text)} 
          value={nome}
        />

        <Text style={styles.textButtons}>CPF</Text>
        <TextInput 
        style={styles.textInput}
          keyboardType='numeric'
          onChangeText={number => setCpf(number)}
          value={cpf}
        />

        <Text style={styles.textButtons}>Telefone</Text>
        <TextInput 
        style={styles.textInput}
          textContentType='telephoneNumber'
          keyboardType='numeric'
          onChangeText={number => setTelefone(number)}
          value={telefone}
        />

        <Text style={styles.textButtons}>Email</Text>
        <TextInput 
        style={styles.textInput}
          textContentType='emailAddress'
          keyboardType='email-address'
          onChangeText={text => setEmail(text)}
          value={email}
        />

        <Text style={styles.textButtons}>Endereço</Text>
        <Text style={styles.textButtons}>Rua:</Text>
        <TextInput 
        style={styles.textInput}
          autoCorrect={false}
          // onChangeText={text => endereco.rua(text)}
          // value={endereco}
        />

        <Text style={styles.textButtons}>Numero:</Text>
        <TextInput 
        style={styles.textInput}
          keyboardType='numeric'
          // onChangeText={number => endereco.numero(number)}
          // value={endereco}
        />

        <Text style={styles.textButtons}>Complemento:</Text>
        <TextInput 
        style={styles.textInput}
          autoCorrect={false}
          placeholder='Ex. Casa, Apartamento nº 123'
          // onChangeText={text => endereco.complemento(text)}
          // value={endereco}
        />

        <Text style={styles.textButtons}>Bairro:</Text>
        <TextInput 
        style={styles.textInput}
          autoCorrect={false}
          // onChangeText={text => endereco.bairro(text)}
          // value={endereco}
        />

        <Text style={styles.textButtons}>Cidade:</Text>
        <TextInput 
        style={styles.textInput}
          autoCorrect={false}
          // onChangeText={text => endereco.cidade(text)}
          // value={endereco}
        />

        <Text style={styles.textButtons}>CEP:</Text>
        <TextInput 
        style={styles.textInput}
          keyboardType='numeric'
          // onChangeText={text => endereco.cep(text)}
          // value={endereco}
        />

        <Text style={styles.textButtons}>Placa do veículo</Text>
        <TextInput 
        style={styles.textInput}
          autoCorrect={false}
          placeholder='AAA 1234 ou AAA1B23'
          onChangeText={text => setPlaca(text)}
          value={placa}
        />
      
        <TouchableOpacity
          onPress={listaMercados}>
            <View style={styles.buttonProximo}>
              <Text style={styles.textButtonProx}>Finalizar</Text>
            </View>
        </TouchableOpacity>

      </ScrollView>
    )
}

const styles = StyleSheet.create({
  
    container:{
      backgroundColor: '#FAF9F9',
    },

    arrowLeft: {
      justifyContent: 'center',
      marginTop: -105,
      marginLeft: 10,
    },

    fundoCadastro: {
      backgroundColor:'#FFF',
      width: '100%',
      height: 130,
      borderWidth: 0.7,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      borderEndColor: '#DEDEDE',
      borderBottomColor: '#DEDEDE',
      borderLeftColor: '#DEDEDE',
      marginBottom: 30,
    },

    cadastro: {
      backgroundColor:'#104032',
      width: '100%',
      height: 60,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },

    textCadastro: {
      fontFamily: 'Nunito_800ExtraBold',
      fontSize: 33,
      color: 'black',
      textAlign:'center',
      marginTop: 10,
    },

    textInput:{
      width: 320,
      height: 44,
      borderRadius: 20,
      backgroundColor: '#FFF',
      borderWidth: 1.4,
      borderColor: '#03A678',
      marginLeft: 20,
      paddingLeft: 20,
      marginBottom: 25,
      color: 'black',
    },

  
    textButtons:{
      fontFamily: 'Nunito_600SemiBold',
      fontSize: 15,
      color: '#514B4B',
      textAlign: 'left',
      marginLeft: 30,
      marginBottom: 5,
    },

    buttonProximo:{
      width: 320,
      height: 45,
      borderWidth: 1.4,
      borderRadius: 5,
      borderColor: '#03A678',
      margin: 20,
      alignItems: 'center',
      justifyContent: 'center'
    },
    
    textButtonProx:{
      color: '#03A678',
      fontFamily: 'Nunito_800ExtraBold',
      fontSize: 16,
      textAlign: 'center',
    },

});