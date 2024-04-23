import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Card = props => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={props.image} style={styles.image} />
      </View>

      <Text style={styles.title}>{props.title}</Text>

      <Text style={styles.date}>{props.date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 130,
    height: 130,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'AveriaLibre-Bold',
    fontSize: 17,
    color: '#3F92C5',
  },
  date: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 16,
    color: 'gray',
    paddingBottom: 15,
  },
  image: {
    height: 55,
    width: 55,
  },
});

export default Card;
