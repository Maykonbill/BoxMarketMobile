import React from 'react';
import { View, StyleSheet, 
TouchableOpacity, Image,
Text, StatusBar, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import BoxMarketLogo from '../icons/BoxMarketLogo.png'

import { useNavigation } from '@react-navigation/core';

export function ListaProdutos2() {

  const navigation = useNavigation();

  function listaProdutos1() {
    navigation.navigate('ListaProdutos1')
  }

    return (
      <ScrollView style={styles.container} >

        <StatusBar backgroundColor='#104032' barStyle='light-content' />

        <View style={styles.fundo}>
        <View style={styles.topo}></View>
          <Text style={styles.textTopo}>Nome produto</Text>
          <TouchableOpacity style={styles.arrowLeft}>
            <AntDesign 
              name="arrowleft" 
              size={35} 
              color="white" 
              onPress={listaProdutos1} 
            />
          </TouchableOpacity>
        </View>

        <View style={styles.container2}>
        <TouchableOpacity style={styles.button} onPress={() => alert("Teste")}>
            <Text style={styles.textsProd}>Produto</Text>
            <Text style={styles.textsValor}>Valor</Text>
            <View style={styles.viewLogo}>
              <Image style={styles.logo}
                source={BoxMarketLogo}/>
            </View>

          <View style={styles.viewMaisMenos}>
            <TouchableOpacity style={styles.viewButtonMenos}>
              <AntDesign style={styles.minus}
                name="minus" 
                size={20} 
                color="black" 
                onPress={() => alert("Teste")} 
              />
            </TouchableOpacity> 
            <Text style={styles.buttonMaisMenosCont}>1</Text>         

            <TouchableOpacity style={styles.viewButtonMais}>
              <AntDesign style={styles.plus}
                name="plus" 
                size={20} 
                color="black" 
                onPress={() => alert("Teste")} 
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.buttonAdd}
          onPress={() => alert('teste')}>
            <Text style={styles.textsButtonAdd}>Adicionar</Text>
              <Image style={styles.logoCarrinho}
                source={BoxMarketLogo}/>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>

      <View style={styles.baixo}>
        <TouchableOpacity style={styles.baixoButton} onPress={() => alert("Teste")}>
        <Image style={styles.logoCarrinhoBaixo}
                source={BoxMarketLogo}/>
        </TouchableOpacity>
      </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
  
    container:{
      backgroundColor: '#FAF9F9',
      flex: 1,
    },

    container2: {
      alignItems: 'center',
      justifyContent: 'center',
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

    topo: {
      backgroundColor:'#104032',
      width: '100%',
      height: 60,
      borderBottomLeftRadius: 7,
      borderBottomRightRadius: 7,
    },

    textTopo: {
      fontFamily: 'Nunito_800ExtraBold',
      fontSize: 30,
      color: 'black',
      textAlign:'center',
      marginTop: 10,
    },

    button: {
      width: 325,
      height: 135,
      borderWidth: 1,
      borderColor: '#DEDEDE',
      borderRadius: 15,
    },

    viewLogo: { 
      width: 90,
      height: 95,
      backgroundColor: '#FFFF',
      marginLeft: 15,
      marginTop: -35,
    },

    logo: {
      width: 70,
      height: 70,
      marginLeft: 10,
      marginTop: 10,
    },

    textsProd: {
      fontFamily: 'Nunito_300Light',
      fontSize: 13,
      marginTop: 20,
      marginLeft: 120,
    }, 

    textsValor: {
      fontFamily: 'Nunito_300Light',
      fontSize: 13,
      marginLeft: 120,
      marginTop: 50,
      marginBottom: -50,
    },
    
    viewMaisMenos: {
      backgroundColor: '#268C6F',
      margin: 0,
      width: 70,
      height: 24,
      borderRadius: 7,
      marginLeft: 110,
      marginBottom: -14.5,
      marginTop: -10,
    },

    minus: {
      margin: 1,
      marginTop: -0.5,
      marginLeft: 0.3,
      marginRight: 2,
    },

    viewButtonMenos: {
      backgroundColor: '#FFFF',
      width: 21,
      height: 21,
      borderRadius: 3,
      marginLeft: 4,
      margin: 1.2,
    },
    
    buttonMaisMenosCont: {
      fontSize: 12,
      fontFamily: 'Nunito_600SemiBold',
      marginLeft: 32,
      marginTop: -20,
    },

    plus: {
      margin: 1,
      marginTop: -0.5,
      marginLeft: 0.3,
      marginRight: 2,
    },

    viewButtonMais: {
      backgroundColor: '#FFFF',
      width: 21,
      height: 21,
      borderRadius: 3,
      marginLeft: 45.5,
      marginTop: -19,
      margin: 1,
    },

    buttonAdd: {
      width: 120,
      height: 24,
      borderRadius: 7,
      marginLeft: 190,
      marginTop: -10,
      backgroundColor: '#268C6F',
    },

    textsButtonAdd: {
      fontFamily: 'Nunito_600SemiBold',
      fontSize: 13,
      marginLeft: 10,
      marginTop: 2,
      color: 'white',
    },

    logoCarrinho: {
      width: 20,
      height: 20,
      marginTop: -19,
      marginLeft: 85,
    },

    baixo: {
      width: '100%',
      height: 49,
      backgroundColor: '#FFFF',
      borderWidth: 1,
      borderColor: '#DEDEDE',
      marginTop: 550,
    },

    baixoButton: {
      width: 60,
      height: 60,
      borderRadius: 100,
      backgroundColor: '#104032',
      marginTop: -30,
      marginLeft: 10,
    },

    logoCarrinhoBaixo: {
      width: 36,
      height: 36,
      marginTop: 13,
      marginLeft: 11,
    },

});