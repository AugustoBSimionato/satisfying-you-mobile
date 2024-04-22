import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

const Coleta = (props) => {
  const emotions = [
    {name: 'Péssimo', image: require('../../assets/images/pessimo.png')},
    {name: 'Ruim', image: require('../../assets/images/ruim.png')},
    {name: 'Neutro', image: require('../../assets/images/neutro.png')},
    {name: 'Bom', image: require('../../assets/images/bom.png')},
    {name: 'Excelente', image: require('../../assets/images/excelente.png')},
  ];

  const goThanks = () => {
    props.navigation.navigate('Agradecimento')
  }

  return (
    <View style={styles.backgroundView}>
      <View style={styles.container}>
        <Text style={styles.title}>O que você achou do Carnaval 2024?</Text>

        <View style={styles.content}>
          {emotions.map((emotion, index) => (
            <TouchableOpacity key={index} onPress={goThanks}>
              <View style={styles.emotionContainer}>
                <Image source={emotion.image} style={styles.image}/>
                <Text style={styles.text}>{emotion.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundView: {
    flex: 1,
    backgroundColor: '#372775',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '95%',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginTop: 50,
  },
  emotionContainer: {
    alignItems: 'center',
  },
  text: {
    fontFamily: 'AveriaLibre-Bold',
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 5,
  },
  title: {
    fontFamily: 'AveriaLibre-Bold',
    fontSize: 25,
    color: '#ffffff',
    textAlign: 'center',
  },
  image: {
    height: 75,
    width: 75,
  },
});

export default Coleta;
