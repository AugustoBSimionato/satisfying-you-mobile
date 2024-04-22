import React, { useState } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Modal}from 'react-native';

const PopUp = (props) => {
  
  const goToModificarPesquisa = () => {
    props.navigation.navigate('ModificarPesquisa');
  }

  return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={props.visible}
    >
        <View style={styles.container}>
          <View style={styles.containerInside}>
            <Text style={styles.titulo}>Tem certeza de apagar essa pesquisa?</Text>
              <View style={styles.buttonsContainer}>
                  <TouchableOpacity style={styles.buttonContainer}  onPress={goToModificarPesquisa} >
                      <Text style={[styles.button, {backgroundColor:'#FF8383',}]}>SIM</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonContainer}  onPress={goToModificarPesquisa} >
                      <Text style={[styles.button, {backgroundColor:'#3F92C5',}]}>CANCELAR</Text>
                  </TouchableOpacity>
              </View>
          </View>
        </View>
        
    </Modal>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    top: 0, 
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerInside:{
    backgroundColor: '#2B1F5C',
    flexDirection: 'column',
    marginHorizontal: "2%",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    paddingVertical: 40
  },
  titulo: {
    color: '#FFFFFF',
    fontSize: 20,
    marginVertical: 10,
  },
  buttonsContainer:{
    flexDirection: 'row'
  },
  button: {
    backgroundColor:'#FF8383',
    color: '#FFFFFF',
    fontSize: 20,
    paddingHorizontal: 5,
    paddingVertical: 5,
    textAlign: 'center',
    width: 130,
    margin: 5
  }
});

export default PopUp;