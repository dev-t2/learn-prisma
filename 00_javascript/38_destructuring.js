const deepObject = {
  state: {
    infomation: {
      name: 'JavaScript',
    },
  },
  value: 5,
};

const {
  state: {
    infomation: { name },
  },
  value,
} = deepObject;

const newObject = { name, value };

console.log(newObject);
