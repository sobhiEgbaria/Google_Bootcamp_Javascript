// to do list with function

// class that make a one task
const to_do_list = [];

const add = (name, is_done = false) => {
  to_do_list.push({
    name: name,
    is_done: is_done,
    id: to_do_list.length + 1,
    date: new Date().toLocaleDateString(),
  });
};

const remove = (task_id) => {
  to_do_list.forEach((task, index) => {
    if (task.id == task_id) {
      to_do_list.splice(index, 1);
    }
  });
};

const is_done = (task_id) => {
  to_do_list.forEach((task, index) => {
    if (task.id == task_id) {
      task["is_done"] = true;
    }
  });
};

const editTodo = (task_id, update) => {
  to_do_list.forEach((task) => {
    if (task.id == task_id) {
      task["name"] = update;
    }
  });
};

const search = (task_id) => {
  for (const task of to_do_list) {
    if (task.id == task_id) {
      return task;
    }
  }
};

add("sobhi");
add("egbaria");
add("remove_test");
add("update_test");

console.log(to_do_list);
remove(3);
console.log(to_do_list);
is_done(2);
console.log(to_do_list);
editTodo(4, "the update is don");
console.log(to_do_list);
console.log(search(1));
