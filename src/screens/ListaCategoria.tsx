import React from 'react';
import { View, StyleSheet, 
TouchableOpacity, Image,
Text, StatusBar, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/core';
import { FlatList } from 'react-native-gesture-handler';

export function ListaCategoria() {

  const navigation = useNavigation();

  function listaProdutos1(){
    navigation.navigate('ListaProdutos1')
  }

  function listaMercados() {
    navigation.navigate('ListaMercados')
  }
  

    return (
      <ScrollView style={styles.container} >

        <StatusBar backgroundColor='#104032' barStyle='light-content' />

        <View style={styles.fundo}>
        <View style={styles.topo}></View>
          <Text style={styles.textTopo}>O que procura?</Text>
          <TouchableOpacity style={styles.arrowLeft}>
            <AntDesign 
              name="arrowleft" 
              size={35} 
              color="white" 
              onPress={listaMercados} 
            />
          </TouchableOpacity>
        </View>

        <View style={styles.container2}>
       
        <TouchableOpacity style={styles.button1} onPress={listaProdutos1}>
            <View style={styles.viewLogo}>
              <Image style={styles.logo}
                source={require('../icons/Limpeza.png')}/>
            </View>
        <Text style={styles.texts}>Limpeza</Text>
        </TouchableOpacity>
       
        <TouchableOpacity style={styles.button2} onPress={listaProdutos1}>
          <View style={styles.viewLogo}>
              <Image style={styles.logo}
                source={require('../icons/Alimenticios.png')}/>
            </View>
        <Text style={styles.texts}>Alimenticíos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button3} onPress={listaProdutos1}>
            <View style={styles.viewLogo}>
              <Image style={styles.logo}
                source={require('../icons/Hortifruti.png')}/>
            </View>
        <Text style={styles.texts}>Hortifruti</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button4} onPress={listaProdutos1}>
            <View style={styles.viewLogo}>
              <Image style={styles.logo}
                source={require('../icons/Higiene.png')}/>
            </View>
        <Text style={styles.texts}>Higiene e Beleza</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button5} onPress={listaProdutos1}>
            <View style={styles.viewLogo}>
              <Image style={styles.logo}
                source={require('../icons/Frango.png')}/>
            </View>
          <Text style={styles.texts}>Congelados</Text>
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
      flexDirection: 'column',
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
      fontFamily: 'Nunito_800ExtraBold',
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
      marginTop: 20
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
      marginTop: 20
    },

    viewLogo: {
      width: 101,
      height: 101,
      margin: 10,
      marginTop: -5,
    },

    logo: {
      width: 101,
      height: 101,
      margin: 10,
      marginTop: 20,
      marginLeft: 20,
    },

    texts: {
      fontFamily: 'Nunito_600SemiBold',
      fontSize: 18,
      marginTop: 30,
      marginBottom: 15,
      marginLeft: 5,
    },

    // baixo: {
    //   width: '100%',
    //   height: 50,
    //   backgroundColor: '#FFFF',
    //   borderWidth: 1,
    //   borderColor: '#DEDEDE',
    //   justifyContent: 'flex-end',

});