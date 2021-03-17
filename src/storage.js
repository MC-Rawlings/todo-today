import rootList from './index';

const saveToLocalStorage = () => {
  const allLists = Array.from(rootList.getList());
  const newRootList = [];

  // loop through all the lists in root
  allLists.forEach((list) => {
    const tasks = Array.from(list.getList());
    const listData = {
      title: list.getTitle(),
      list: [],
    };

    // loop through all tasks in each list
    tasks.forEach((task) => {
      const taskData = {
        title: task.getTitle(),
        description: task.getDescription(),
        priority: task.getPriority(),
        isChecked: task.getIsChecked(),
      };

      listData.list.push(taskData);
    });

    newRootList.push(listData);
  });

  localStorage.setItem('rootList', JSON.stringify(newRootList));
};

export { saveToLocalStorage };
