import React from 'react';
import { View, StyleSheet, 
TouchableOpacity, Image,
Text, StatusBar, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import BoxMarketLogo from '../icons/BoxMarketLogo.png'

import { useNavigation } from '@react-navigation/core';

export function ListaMercados(){

  const navigation = useNavigation();

  function listaCategoria(){
    navigation.navigate('ListaCategoria')
  }

  function login() {
    navigation.navigate('Login')
  }


    return (
        <ScrollView style={styles.container} >

        <StatusBar backgroundColor='#104032' barStyle='light-content' />

        <View style={styles.fundo}>
          
        <View style={styles.topo}></View>
          <Text style={styles.textTopo}>Escolha o mercado que deseja fazer sua compra</Text>
          <TouchableOpacity style={styles.arrowLeft}>
            <AntDesign 
              name="arrowleft" 
              size={35} 
              color="white" 
              onPress={login} 
            />
          </TouchableOpacity>
        </View>
        
        <View style={styles.viewListaMercados}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={listaCategoria}
        >
            <View style={styles.viewLogoMercado}>
              <Image style={styles.logoMercado}
                source={BoxMarketLogo}/>
            </View>
            <Text style={styles.nomeMercado}>Mercado 1</Text>
            <Text style={styles.descMercado}>
              Endereço
            </Text>
        </TouchableOpacity>
        </View>

        {/* <View style={styles.baixo} /> */}
      </ScrollView>
    )
}

const styles = StyleSheet.create({
  
    container:{
      backgroundColor: '#FAF9F9',
      flex: 1,
    },

    arrowLeft: {
      justifyContent: 'center',
      marginTop: -85,
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
      fontSize: 15,
      color: 'black',
      textAlign:'center',
      marginTop: 20,
    },

    viewListaMercados: {
      justifyContent: 'center',
      alignItems: 'center',
    },

    button: {
      width: 315,
      height: 120,
      borderWidth: 1,
      borderColor: '#DEDEDE',
      borderRadius: 15,
      marginBottom: 20,
    },

    viewLogoMercado: {
      width: 70,
      height: 70,
      marginTop: 30,
      marginLeft: 10,
    },

    logoMercado: {
      width: 60,
      height: 60,
    },

    nomeMercado: {
      fontFamily: 'Nunito_600SemiBold',
      fontSize: 24,
      marginLeft: 100,
      marginTop: -70,
    },

    descMercado: {
      fontFamily: 'Nunito_300Light',
      fontSize: 13,
      marginLeft: 100,
      marginTop: -5,
    },

    // baixo: {
    //   width: '100%',
    //   height: 50,
    //   backgroundColor: '#FFFF',
    //   borderWidth: 1,
    //   borderColor: '#DEDEDE',
    //   justifyContent: 'flex-end',

})