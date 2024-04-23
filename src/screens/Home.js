import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { PaperProvider, DefaultTheme, Button, Searchbar } from 'react-native-paper';
import Card from '../components/Card';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#372775',
    secondary: 'gray',
  },
};

const Home = (props) => {
  const searchs = [
    {title: 'SECOMP', image: require('../../assets/images/secomp.png'), date: "10/10/2023"},
    {title: 'UBUNTU 2022', image: require('../../assets/images/ubuntu.png'), date: "05/06/2022"},
    {title: 'MENINAS CPU', image: require('../../assets/images/meninas.png'), date: "01/04/2022"},
    {title: 'COTB', image: require('../../assets/images/secomp.png'), date: "01/04/2022"},
    {title: 'CARNAVAL', image: require('../../assets/images/secomp.png'), date: "15/02/2020"},
  ];

  const [searchQuery, setSearchQuery] = useState('');

  const goToNewSearch = () => {
    props.navigation.navigate('NovaPesquisa')
  }

  const goToSearchOptions = () => {
    props.navigation.navigate('AcoesPesquisa')
  }

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Searchbar
          placeholder="Insira o termo de busca..."
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchBar}
        />

        <ScrollView horizontal={true} style={styles.searchList}>
        {searchs.map((search, index) => (
            <TouchableOpacity key={index} onPress={goToSearchOptions}>
              <Card image={search.image} title={search.title} date={search.date} />
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Button
          style={styles.newSearchButton}
          mode="contained"
          onPress={goToNewSearch}>
          <Text style={styles.newSearchButtonLabel}>Nova pesquisa</Text>
        </Button>
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
  searchBar: {
    width: '100%',
    marginBottom: 5,
    borderRadius: 10,
    fontFamily: 'AveriaLibre-Regular',
  },
  newSearchButton: {
    backgroundColor: '#37BD6D',
    borderRadius: 5,
    padding: 5,
    width: '100%',
    alignItems: 'center',
  },
  newSearchButtonLabel: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 21,
  },
  searchList: {
    flexDirection: 'row',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default Home;
