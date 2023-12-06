// class that make a one task
class task {
  constructor(name, is_done = false) {
    this.name = name;
    this.id = id++;
    this.is_done = is_done;
    this.date = new Date().getDate();
  }
}

// list of tasks
class list_of_tasks {
  constructor() {
    this.tasks = {};
  }

  add(task) {
    this.tasks[task.id] = task;
  }

  remove(task) {
    delete this.tasks[task.id];
  }

  is_done(task) {
    task.is_done = true;
  }
  editTodo(task, update) {
    task.name = update;
  }

  search(task) {
    return this.tasks[task];
  }
}

let id = 1;
let first_list = new list_of_tasks();
let new_task = new task("html");
let new_task2 = new task("css");
let new_task3 = new task("javascript");
let new_task4 = new task("reactjs");

first_list.add(new_task);
first_list.add(new_task2);
first_list.add(new_task3);
first_list.add(new_task4);
first_list.remove(new_task3);
first_list.is_done(new_task2);
first_list.editTodo(new_task4, "nexstjs");

console.log(first_list);

console.log(first_list.search("1")); // search by id
