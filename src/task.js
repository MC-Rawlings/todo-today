/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
const createTask = (title, description, priority) => {
  let isChecked = false;

  // Getters
  const getTitle = () => title;
  const getDescription = () => description;
  const getPriority = () => priority;
  const getIsChecked = () => isChecked;

  // Setters
  const setTitle = (newTitle) => (title = newTitle);

  const setDescription = (newDescription) => (description = newDescription);
  const setPriority = (newPriority) => (priority = newPriority);

  const toggleCheck = () => {
    // eslint-disable-next-line no-unused-expressions
    if (isChecked === false) {
      isChecked = true;
    } else {
      isChecked = false;
    }
  };

  return {
    getTitle,
    getDescription,
    getPriority,
    getIsChecked,
    setTitle,
    setDescription,
    setPriority,
    toggleCheck,
  };
};

export default createTask;
