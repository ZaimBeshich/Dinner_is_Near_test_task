import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import COLORS from '../constants/colors';
import { flatData } from '../helpers/FlatData';
import Icon from '../components/Icons/Icon';
import { Favorite } from '../components/Favorite';

export const Recipe = ({ route }) => {
  const {
    params: { item },
  } = route;

  const { title, image, ingredients, receipt } = item;

  const [isChecked, setIsChecked] = useState(false);

  const addToFavorite = () => {
    setIsChecked(!isChecked);
  };

  const renderItem = (el: string, idx: number) => {
    return (
      <View style={styles.row} key={el + idx}>
        <Icon name='circle' style={styles.icon} key={idx + el} />
        <Text key={idx + 1}>{` ${el}`}</Text>
      </View>
    );
  };

  const renderList = () => {
    return (
      <>
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
      </>
    );
  };

  return (
    <Container>
      <ScrollView style={styles.container}>
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
    backgroundColor: COLORS.greenSecondary,
    borderRadius: 12,
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 10,
  },
  h2Container: {
    flexDirection: 'row',
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
  },
  h2: {
    color: COLORS.black,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  receipt: {
    color: COLORS.black,
    fontSize: 17,
    lineHeight: 23,
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
