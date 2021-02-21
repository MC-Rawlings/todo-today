/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
const createTask = (title, description) => {
  let isChecked = false;

  // Getters
  const getTitle = () => title;
  const getDescription = () => description;
  const getIsChecked = () => isChecked;

  // Setters
  const setTitle = (newTitle) => {
    const tempTitle = newTitle;
    return tempTitle;
  };

  const setDescription = (newDescription) => (description = newDescription);

  const toggleCheck = () => {
    // eslint-disable-next-line no-unused-expressions
    isChecked === false ? (isChecked = true) : (isChecked = false);
  };

  return {
    getTitle,
    getDescription,
    getIsChecked,
    setTitle,
    setDescription,
    toggleCheck,
  };
};

export default createTask;
