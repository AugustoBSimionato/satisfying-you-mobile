import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const AcoesPesquisa = (props) => {
  return (
    <View style={styles.backgroundView}>
      <Card destino={'ModificarPesquisa'} texto={"Modificar"} src={require("../../assets/images/modificar.png")} navigation={props.navigation.navigate} />
      <Card destino={'Coleta'} texto={"Coletar dados"} src={require("../../assets/images/coletarDados.png")} navigation={props.navigation.navigate} />
      <Card destino={'Relatorio'} texto={"Relatório"} src={require("../../assets/images/relatorio.png")} navigation={props.navigation.navigate} />
    </View>
  );
};

const Card = (props) => {
  const go = () => props.navigation(props.destino);

  return (
    <TouchableOpacity style={styles.card} onPress={go}  >
      <Image style={styles.cardImage} source={props.src} />
      <Text style={styles.cardText}>{props.texto}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backgroundView: {
    flex: 1,
    backgroundColor: '#372775',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: "relative",
  },
  card: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: "#312464",
    width: "25%",
    height: "65%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  cardImage: {
  },
  cardText: {
    fontFamily: "AveriaLibre-Regular",
    fontSize: 20,
    fontWeight: "400",
    lineHeight: 42.96,
    textAlign: "center",
    color: "#FFFFFF",
  }
});

export default AcoesPesquisa;
