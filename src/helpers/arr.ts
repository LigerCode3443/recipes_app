export const objKey = (obj) => {
  const keys = [];
  const values = [];
  Object.keys(obj).forEach((key) => {
    if (key.startsWith("strIngredient") && obj[key]) {
      keys.push(obj[key]);
    }
    if (key.startsWith("strMeasure") && obj[key]?.trim()) {
      values.push(obj[key]);
    }
  });
  const result = keys.map((key, i) => ({ [key]: values[i] }));
  return result;
};
export const mergeObjectsFromArray = (arr) => {
  return arr.reduce((acc, obj) => {
    for (const key in obj) {
      if (acc[key]) {
        acc[key] = Array.isArray(acc[key]) ? acc[key] : [acc[key]];
        acc[key].push(obj[key]);
      } else {
        acc[key] = obj[key];
      }
    }
    return acc;
  }, {});
};
