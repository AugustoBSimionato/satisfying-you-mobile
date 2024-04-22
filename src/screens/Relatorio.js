import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Teste from '../components/Chart';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#372775',
    secondary: 'gray',
  },
};

const windowWidth = Dimensions.get('window').width;

const Relatorio = () => {
  const data = [
    { name: 'Excelente', color: '#F1CE7E' },
    { name: 'Bom', color: '#6994FE' },
    { name: 'Neutro', color: '#5FCDA4' },
    { name: 'Ruim', color: '#EA7288' },
    { name: 'Péssimo', color: '#53D8D8' },
  ];

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <View style={styles.chartContainer}>
          <View style={styles.chart}>
            <Teste />
          </View>
          <View style={styles.chartLabelsContainer}>
            {data.map((label, index) => (
              <View style={styles.labelsContainer} key={index}>
                <Icon
                  name="square"
                  size={windowWidth > 600 ? 50 : 30}
                  color={label.color}
                  style={styles.image}
                />
                <Text style={[styles.text, { fontSize: windowWidth > 600 ? 16 : 14 }]}>
                  {label.name}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#372775',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chart: {
    flex: 1,
  },
  chartLabelsContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  labelsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    height: 50,
    width: 50,
  },
  text: {
    fontFamily: 'AveriaLibre-Bold',
    color: '#ffffff',
    textAlign: 'center',
    marginLeft: 10,
  },
});

export default Relatorio;
