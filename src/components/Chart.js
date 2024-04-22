import React from 'react';
import {View, StyleSheet} from 'react-native';
import {PieChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';

const Chart = () => {
  const data = [
    {
      name: 'Excelente',
      value: 21500000,
      color: '#F1CE7E',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Bom',
      value: 2800000,
      color: '#6994FE',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Neutro',
      value: 13527612,
      color: '#5FCDA4',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Ruim',
      value: 8538000,
      color: '#EA7288',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Péssimo',
      value: 11920000,
      color: '#53D8D8',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
    useShadowColorFromDataset: false,
  };

  return (
    <View>
      <PieChart
        data={data}
        width={Dimensions.get('window').width}
        height={340}
        chartConfig={chartConfig}
        accessor={'value'}
        backgroundColor={'transparent'}
        hasLegend={false}
        center={[85, 0]}
        relative
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#372775',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default Chart;
