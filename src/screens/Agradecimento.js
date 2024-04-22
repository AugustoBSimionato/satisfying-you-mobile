import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Agradecimento = (props) => {
  const goHome = () => {
    props.navigation.navigate('Coleta')
  }

  useEffect(() => {
    const timer = setTimeout(goHome, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.backgroundView}>
      <View style={styles.content}>
        <Text style={styles.text}>Obrigado por participar da pesquisa!</Text>
        <Text style={styles.text}>Aguardamos você no próximo ano!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundView: {
    flex: 1,
    backgroundColor: '#372775',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  text: {
    fontFamily: 'AveriaLibre-Bold',
    fontSize: 22,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default Agradecimento;
