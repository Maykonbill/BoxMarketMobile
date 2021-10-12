import React, { useState } from 'react';
import { View, StyleSheet, 
TouchableOpacity, TextInput,
Text, StatusBar, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/core';

export function AddCard() {

  const navigation = useNavigation();

  function listaMercados() {
    dadosCartao()
    navigation.navigate('ListaMercados')
  }

  const [apelidoCard, setApelidoCard] = useState("");
  const [numCard, setNumCard] = useState("");
  const [mesExpira, setMesExpira] = useState("");
  const [anoExpira, setAnoExpira] = useState("");
  const [cvv, setCvv] = useState("");
  const [nomeCard, setNomeCard] = useState("");
  const [cpf, setCpf] = useState("");


  const dadosCartao = () => {
    alert('Volta pra tela de Formas de pagamento com o novo cartão')
    console.log(`
      Dados do cartão:
      Apelido do cartão: ${apelidoCard},
      Numero do cartão: ${numCard},
      Mês de expiração: ${mesExpira},
      Ano de expiração: ${anoExpira},
      CVV: ${cvv},
      Nome impresso no cartão: ${nomeCard},
      CPF titutar: ${cpf}
    `)
  }
 
    return (
      <ScrollView style={styles.container} >

        <StatusBar backgroundColor='#104032' barStyle='light-content' />

        <View style={styles.fundo}>
          
        <View style={styles.formasPag}></View>
          <Text style={styles.textFormasPag}>Formas de pagamento</Text>
          <TouchableOpacity style={styles.arrowLeft}>
            <AntDesign 
              name="arrowleft" 
              size={35} 
              color="white" 
              onPress={() => alert('Vai pra tela de Login')} 
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.cardCredit}>Adicionar Cartão</Text>
          
        <TextInput 
          style={styles.textInput}
          textContentType='name'
          autoCorrect={false}
          placeholder='Apelido do cartão'
          onChangeText={text => setApelidoCard(text)}
          value={apelidoCard}
        />
        <TextInput 
          style={styles.textInput}
          placeholder='Número do cartão'
          onChangeText={text => setNumCard(text)}
          value={numCard}
        />

        <Text style={styles.textMes}>Mês de expiração</Text>
        <TextInput 
          style={styles.textInputMes}
          onChangeText={text => setMesExpira(text)}
          value={mesExpira}
        />

        <Text style={styles.textAno}>Ano de expiração</Text>
        <TextInput 
            style={styles.textInputAno}
            onChangeText={text => setAnoExpira(text)}
            value={anoExpira}
          />
        
        <Text style={styles.textCVV}>CVV</Text>
        <TextInput 
          style={styles.textInputCVV}
          onChangeText={text => setCvv(text)}
          value={cvv}
        />

        <TextInput 
          style={styles.textInputNome}
          placeholder='Nome do titutar do cartão'
          onChangeText={text => setNomeCard(text)}
          value={nomeCard}
        />  
        <Text style={styles.textNome}>Digite o nome como está no cartão</Text>

        <TextInput 
          style={styles.textInput}
          placeholder='CPF do titutar do cartão'
          onChangeText={text => setCpf(text)}
          value={cpf}
        />  

        <TouchableOpacity
          onPress={listaMercados}>
            <View style={styles.buttonSave}>
              <Text style={styles.textButtonSave}>Salvar</Text>
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
      marginTop: -95,
      marginLeft: 10,
    },

    fundo: {
      backgroundColor:'#FFF',
      width: '100%',
      height: 130,
      borderWidth: 0.7,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      borderEndColor: '#DEDEDE',
      borderBottomColor: '#DEDEDE',
      borderLeftColor: '#DEDEDE',
      marginBottom: 20,
    },

    formasPag: {
      backgroundColor:'#104032',
      width: '100%',
      height: 60,
      borderBottomLeftRadius: 7,
      borderBottomRightRadius: 7,
    },

    textFormasPag: {
      fontFamily: 'Nunito_800ExtraBold',
      fontSize: 30,
      color: 'black',
      textAlign:'center',
      marginTop: 10,
    },

    cardCredit: {
      fontFamily: 'Nunito_600SemiBold',
      fontSize: 20,
      marginLeft: 30,
      marginBottom: 30,
    },

    textInput: {
      width: 320,
      height: 44,
      borderRadius: 10,
      backgroundColor: '#FFF',
      borderWidth: 1.4,
      borderColor: '#03A678',
      marginLeft: 20,
      paddingLeft: 20,
      marginBottom: 15,
      color: 'black',
    },

    textInputMes: {
      width: 150,
      height: 44,
      borderRadius: 10,
      backgroundColor: '#FFF',
      borderWidth: 1.4,
      borderColor: '#03A678',
      marginLeft: 20,
      paddingLeft: 20,
      marginBottom: 15,
      color: 'black',
    },

    textMes: {
      fontFamily: 'Nunito_300Light',
      fontSize: 12,
      marginLeft: 25,
    },

    textInputAno: {
      width: 150,
      height: 44,
      borderRadius: 10,
      backgroundColor: '#FFF',
      borderWidth: 1.4,
      borderColor: '#03A678',
      marginLeft: 20,
      paddingLeft: 20,
      marginBottom: 15,
      color: 'black',
    },
    
    textAno: {
      fontFamily: 'Nunito_300Light',
      fontSize: 12,
      marginLeft: 25,
    },

    textInputCVV: {
      width: 150,
      height: 44,
      borderRadius: 10,
      backgroundColor: '#FFF',
      borderWidth: 1.4,
      borderColor: '#03A678',
      marginLeft: 20,
      paddingLeft: 20,
      marginBottom: 15,
      color: 'black',
    },

    textCVV: {
      fontFamily: 'Nunito_300Light',
      fontSize: 12,
      marginLeft: 25,
    },

    textInputNome: {
      width: 320,
      height: 44,
      borderRadius: 10,
      backgroundColor: '#FFF',
      borderWidth: 1.4,
      borderColor: '#03A678',
      marginLeft: 20,
      marginTop: 15,
      paddingLeft: 20,
      color: 'black',
    },
    
    textNome: {
      fontFamily: 'Nunito_300Light',
      fontSize: 12,
      marginLeft: 25,
      marginBottom: 20,
    },

    buttonSave:{
      width: 320,
      height: 45,
      borderWidth: 1.4,
      borderRadius: 5,
      borderColor: '#03A678',
      marginTop: 50,
      marginLeft: 20,
      marginBottom: 15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    textButtonSave:{
      color: '#03A678',
      fontFamily: 'Nunito_800ExtraBold',
      fontSize: 16,
      textAlign: 'center',
    },

});