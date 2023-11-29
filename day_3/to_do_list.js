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
let list_of_tasks1 = new list_of_tasks();
let new_task = new task("html");
let new_task2 = new task("css");
let new_task3 = new task("javascript");
let new_task4 = new task("reactjs");

list_of_tasks1.add(new_task);
list_of_tasks1.add(new_task2);
list_of_tasks1.add(new_task3);
list_of_tasks1.add(new_task4);
list_of_tasks1.remove(new_task3);
list_of_tasks1.is_done(new_task2);
list_of_tasks1.editTodo(new_task4, "nexstjs");

console.log(list_of_tasks1);

console.log(list_of_tasks1.search("1")); // search by id
