import React from 'react';
import { View, StyleSheet, 
TouchableOpacity, Image,
Text, StatusBar, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/core';

import BoxMarketLogo from '../icons/BoxMarketLogo.png'

export function ListaProdutos1() {

  const navigation = useNavigation();

  function listaProdutos2(){
    navigation.navigate('ListaProdutos2')
  }

  function listaCategoria() {
    navigation.navigate('ListaCategoria')
  }
  

    return (
      <ScrollView style={styles.container} >

        <StatusBar backgroundColor='#104032' barStyle='light-content' />

        <View style={styles.fundo}>
        <View style={styles.topo}></View>
          <Text style={styles.textTopo}>Ex. Limpeza</Text>
          <TouchableOpacity style={styles.arrowLeft}>
            <AntDesign 
              name="arrowleft" 
              size={35} 
              color="white" 
              onPress={listaCategoria} 
            />
          </TouchableOpacity>
        </View>

        <View style={styles.container2}>
       

        <TouchableOpacity style={styles.button1} onPress={listaProdutos2}>
            <Text style={styles.texts}>Nome produto</Text>
            <View style={styles.viewLogo}>
              <Image style={styles.logo}
                source={BoxMarketLogo}/>
            </View>
        </TouchableOpacity>
       
        <TouchableOpacity style={styles.button2} onPress={listaProdutos2}>
            <Text style={styles.texts}>Nome Produto</Text>
            <View style={styles.viewLogo}>
              <Image style={styles.logo}
                source={BoxMarketLogo}/>
            </View>
        </TouchableOpacity>


        <TouchableOpacity style={styles.button3} onPress={listaProdutos2}>
            <Text style={styles.texts}>Nome Produto</Text>
            <View style={styles.viewLogo}>
              <Image style={styles.logo}
                source={BoxMarketLogo}/>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button4} onPress={listaProdutos2}>
            <Text style={styles.texts}>Nome Produto</Text>
            <View style={styles.viewLogo}>
              <Image style={styles.logo}
                source={BoxMarketLogo}/>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button5} onPress={listaProdutos2}>
            <Text style={styles.texts}>Nome Produto</Text>
            <View style={styles.viewLogo}>
              <Image style={styles.logo}
                source={BoxMarketLogo}/>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button6} onPress={listaProdutos2}>
            <Text style={styles.texts}>Nome Produto</Text>
            <View style={styles.viewLogo}>
              <Image style={styles.logo}
                source={BoxMarketLogo}/>
            </View>
        </TouchableOpacity>
      </View>

        {/* <View style={styles.baixo} /> */}

    </ScrollView>
    )
}

const styles = StyleSheet.create({
  
    container:{
      backgroundColor: '#FAF9F9',
    },

    container2: {
      margin: 10,
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
      fontFamily: 'Nunito_300Light',
      fontSize: 30,
      color: 'black',
      textAlign:'center',
      marginTop: 10,
    },

    button1: {
      width: 156,
      height: 135,
      borderWidth: 1,
      borderColor: '#DEDEDE',
      borderRadius: 15,
      marginBottom: -50,
    },

    button2: {
      width: 156,
      height: 135,
      borderWidth: 1,
      borderColor: '#DEDEDE',
      borderRadius: 15,
      marginBottom: 15, 
      marginLeft: 180,
      marginTop: -85
    },

    button3: {
      width: 156,
      height: 135,
      borderWidth: 1,
      borderColor: '#DEDEDE',
      borderRadius: 15,
      marginBottom: 15, 
    },

    button4: {
      width: 156,
      height: 135,
      borderWidth: 1,
      borderColor: '#DEDEDE',
      borderRadius: 15,
      marginBottom: 15, 
      marginLeft: 180,
      marginTop: -150,
    },

    button5: {
      width: 156,
      height: 135,
      borderWidth: 1,
      borderColor: '#DEDEDE',
      borderRadius: 15,
      marginBottom: 15, 
    },

    button6: {
      width: 156,
      height: 135,
      borderWidth: 1,
      borderColor: '#DEDEDE',
      borderRadius: 15,
      marginBottom: 15, 
      marginLeft: 180,
      marginTop: -150,
    },

    viewLogo: {
      width: 101,
      height: 101,
      margin: 10,
      marginTop: -5,
    },

    logo: {
      width: 85,
      height: 85,
      margin: 10,
      marginTop: 10,
      marginLeft: 25,
    },

    texts: {
      fontFamily: 'Nunito_300Light',
      fontSize: 18,
      marginTop: 5,
      marginLeft: 20,
    },

    // baixo: {
    //   width: '100%',
    //   height: 50,
    //   backgroundColor: '#FFFF',
    //   borderWidth: 1,
    //   borderColor: '#DEDEDE',
    //   justifyContent: 'flex-end',

});