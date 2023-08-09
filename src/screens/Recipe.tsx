import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Container } from '../components/Container';
import COLORS from '../constants/colors';
import Icon from '../components/Icons/Icon';
import { Favorite } from '../components/Favorite';
import { mockRecipesType } from '../constants/types';

export const Recipe = ({ route }) => {
  const {
    params: { item },
  } = route;

  const { title, image, ingredients, receipt }: mockRecipesType = item;

  const [isChecked, setIsChecked] = useState(false);

  const addToFavorite = () => {
    setIsChecked(!isChecked);
  };

  const renderItem = (el: string, idx: number) => {
    return (
      <View style={styles.row} key={el + idx}>
        <Icon name='circle' style={styles.icon} />
        <Text style={styles.itemText}>{` ${el}`}</Text>
      </View>
    );
  };

  const renderList = () => {
    return (
      <View style={styles.list}>
        <View style={styles.h2Container}>
          <Image
            source={image}
            resizeMode='contain'
            style={styles.img}
            alt={title}
          />
          <Text style={styles.h2}>Ингредиенты: </Text>
        </View>

        {ingredients.map((el, idx) => renderItem(el, idx))}
      </View>
    );
  };

  return (
    <Container>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.h1Container}>
          <Text style={styles.h1}>{title}</Text>
        </View>
        <Favorite isChecked={isChecked} onPress={addToFavorite} />

        {renderList()}
        <Text style={styles.h2}>Способ приготовления:</Text>
        <Text style={styles.receipt}>{`   ${receipt}`}</Text>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  h1Container: {
    backgroundColor: COLORS.green_3,
    borderRadius: 12,
    paddingTop: 10,
    paddingBottom: 15,
  },
  h2Container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  h1: {
    color: COLORS.white,
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  img: {
    borderRadius: 12,
    width: 50,
    height: 50,
    marginRight: 10,
  },
  h2: {
    color: COLORS.black,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  list: {
    marginBottom: 20,
  },
  receipt: {
    color: COLORS.black,
    fontSize: 17,
    lineHeight: 23,
    marginTop: 5,
  },
  itemText: {
    color: COLORS.black,
    fontSize: 17,
    // lineHeight: 23,
    // marginTop: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 8,
    marginHorizontal: 10,
    color: COLORS.black,
  },
});
