export const flatData = (arr) => {
  return arr.map((el, idx) => {
    return {
      id: idx + 1,
      ing: el,
    };
  });
};
