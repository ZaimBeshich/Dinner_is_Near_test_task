import { ImageProps, ViewStyle } from 'react-native';

type mockRecipesType = {
  id: string;
  title: string;
  image: ImageProps;
  receipt: string;
  ingredients: string[];
};

type FavProps = {
  isChecked: boolean;
  onPress: () => void;
};

type ButtonProps = {
  title: string;
  buttonStyle?: ViewStyle;
  disabled?: boolean;
  onPress: () => void;
};

export { mockRecipesType, FavProps, ButtonProps };
