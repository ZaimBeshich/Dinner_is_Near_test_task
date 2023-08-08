import img_1 from '../img/Mock_img_1.png';
import img_2 from '../img/Mock_img_2.jpeg';

export const MOCK_INGREDIENTS = [
  'Баранина тушеная',
  'Бобовые',
  'Маслины, оливки',
  'Оранжевая/ жёлтая клетчатка: желтый болгарский перец, батат, тыква',
];

export const MOCK_RECIPES = [
  {
    id: '1234',
    title: 'Recipe 1 short title',
    image: img_1,
  },
  {
    id: '2345',
    title:
      'Recipe 2 long title with a lot of additional text to be more than container size',
    image: img_2,
  },
  {
    id: '3456',
    title: 'Recipe 3',
    image: img_1,
  },
  {
    id: '4567',
    title:
      'Recipe 4 long title with a lot of additional text to be more than container size long title with a lot of additional text to be more than container size',
    image: img_2,
  },
];
