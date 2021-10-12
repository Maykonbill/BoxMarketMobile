import React from 'react';
import { View, StyleSheet, 
TouchableOpacity,
Text, StatusBar, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/core';

export function FormasPagamento() {

  const navigation = useNavigation();

  function addCard(){
    navigation.navigate('AddCard')
  }

    return (
      <ScrollView style={styles.container} >

        <StatusBar backgroundColor='#104032' barStyle='light-content' />

        <View style={styles.fundo}>
          
        <View style={styles.formasPag}></View>
          <Text style={styles.text}>Formas de pagamento</Text>
          <TouchableOpacity style={styles.arrowLeft}>
            <AntDesign 
              name="arrowleft" 
              size={35} 
              color="white" 
              onPress={() => alert('Vai pra tela de Login')} 
            />
          </TouchableOpacity>
        </View>
      
        <TouchableOpacity
          onPress={addCard}>
            <View style={styles.buttonAddCartao}>
              <Text style={styles.textButtonAdd}>Adicionar novo cartão</Text>
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
      marginBottom: 30,
    },

    formasPag: {
      backgroundColor:'#104032',
      width: '100%',
      height: 60,
      borderBottomLeftRadius: 7,
      borderBottomRightRadius: 7,
    },

    text: {
      fontFamily: 'Nunito_800ExtraBold',
      fontSize: 30,
      color: 'black',
      textAlign:'center',
      marginTop: 10,
    },

    buttonAddCartao:{
      width: 320,
      height: 45,
      borderWidth: 1.4,
      borderRadius: 5,
      borderColor: '#03A678',
      margin: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    textButtonAdd:{
      color: '#03A678',
      fontFamily: 'Nunito_800ExtraBold',
      fontSize: 16,
      textAlign: 'center',
    },

});