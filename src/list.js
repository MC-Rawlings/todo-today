const createList = (title) => {
  let list = [];

  // Getters
  const getTitle = () => title;
  const getList = () => list;

  // Setters
  // eslint-disable-next-line no-param-reassign
  // eslint-disable-next-line no-return-assign
  const setTitle = (newTitle) => (title = newTitle);

  // Methods
  const addToList = (task) => list.push(task);

  const removeTask = (taskTitle) => {
    list = list.filter((task) => task.getTitle() !== taskTitle);
  };

  return {
    getTitle,
    getList,
    setTitle,
    addToList,
    removeTask,
  };
};

export default createList;
