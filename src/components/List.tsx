import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ImageProps,
  Dimensions,
} from 'react-native';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import COLORS from '../constants/colors';
import { MOCK_RECIPES } from '../constants/mockStrings';
import { useNavigation } from '@react-navigation/native';

type receptProps = {
  id: string;
  title: string;
  image: ImageProps;
};

export const List = () => {
  const navigation = useNavigation<any>();

  const renderItem = ({ item }: { item: receptProps }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.push('Recipe', {
            item,
          })
        }
        style={styles.item}>
        <Image
          source={item.image}
          resizeMode='contain'
          style={styles.img}
          alt={item.title}
        />

        <Text style={styles.itemTitle} ellipsizeMode='tail' numberOfLines={2}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Рецепты</Text>
      <FlatList
        data={MOCK_RECIPES}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const { width } = Dimensions.get('window');

const horizontalMargin = 16;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  h1: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  itemTitle: {
    color: COLORS.white,
    fontSize: 16,
    width: width - width / 3 + horizontalMargin,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: COLORS.greenSecondary,
    borderRadius: 12,
    marginBottom: 10,
    padding: 5,
  },
  img: {
    borderRadius: 12,
    width: 50,
    height: 50,
    marginRight: 10,
  },
});
