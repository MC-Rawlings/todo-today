const createList = (title) => {
  let list = [];

  // Getters
  const getTitle = () => title;
  const getList = () => list;

  // Setters
  // eslint-disable-next-line no-param-reassign
  // eslint-disable-next-line no-return-assign
  const setTitle = (newTitle) => (title = newTitle);

  // eslint-disable-next-line no-return-assign
  const updateList = (newList) => (list = newList);

  // Methods
  const addToList = (task) => list.push(task);

  const removeTask = (index) => {
    list.splice(index, 1);
  };

  return {
    getTitle,
    getList,
    setTitle,
    addToList,
    removeTask,
    updateList,
  };
};

export default createList;
