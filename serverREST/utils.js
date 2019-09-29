const changeIdPropNameCollection = collection => {
  const nextCollection = collection.map(item => {
    const { _id, ...rest } = item;
    rest.id = _id;
    return rest;
  });
  return nextCollection;
};
const changeIdPropName = item => {
  const { _id, ...rest } = item;
  rest.id = _id;

  return rest;
};

module.exports = { changeIdPropName, changeIdPropNameCollection };
