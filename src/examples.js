const myObj = {
  firstName: 'John',
  lastName: 'Charles',
  middleName: {
    one: 'Yes',
  },
};

console.log(myObj?.middleName?.two);

const getValue = () => {
  return undefined;
};
const getValue2 = () => {
  return 'value2';
};

// const myValue = getValue() ?? 'fallback';
// const myValue = getValue() || 'fallback';

// const myValue = getValue() && <div>Hello</div>;

console.log('myValue', myValue);
