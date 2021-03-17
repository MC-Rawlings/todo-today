import rootList from './index';
import createList from './list';
import createTask from './task';

const saveToLocalStorage = () => {
  const allLists = rootList.getList();
  const newRootList = [];

  // loop through all the lists in root
  allLists.forEach((list) => {
    const tasks = list.getList();
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

const loadFromLocalStorage = () => {
  const lists = Array.from(JSON.parse(localStorage.getItem('rootList'));
  const newRoot = [];

  lists.forEach(
    ({ title } = (list) => {
      const newList = createList(title);

      list.forEach(
        ({ title, priority, description, isChecked } = (task) => {
          createTask(title, description, priority);
          if (task.getIsChecked !== isChecked) {
            task.toggleIsChecked();
            console.log('test:', title, description, priority, isChecked);
          }

          newList.addToList(task);
        })
      );
      newRoot.push(newList);
    })
  );
  rootList.updateList(newRoot);
};

export { saveToLocalStorage, loadFromLocalStorage };
