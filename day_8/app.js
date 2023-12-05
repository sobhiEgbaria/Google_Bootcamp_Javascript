const add_task = document.getElementById("btn"); // btn add task onClick
const input = document.getElementById("input"); // input for the task title
const tasks_div = document.getElementById("tasks"); // div contain all the new tasks
const update_bar = document.getElementById("update_bar"); // div contain the input+btn update
const update_input = document.getElementById("update_input"); // input for the update

// update_bar display = disappear
update_bar.style.display = "none";

// event listener to add task
add_task.addEventListener("click", () => {
  if (input.value !== "") {
    add(input.value);
    input.value = "";
  }
  render_task(to_do_list);
});

// event listener to remove task
tasks_div.addEventListener("click", (e) => {
  if (e.target.className == "delete") {
    remove(parseInt(e.target.id));
    e.target.parentElement.parentElement.remove(); // remove the div that contain the task
  }
});

// event listener to change is_done status
//
tasks_div.addEventListener("click", (e) => {
  if (e.target.className == "not_done" || e.target.className == "done") {
    if (to_do_list[parseInt(e.target.id)].is_done) {
      is_done(parseInt(e.target.id));
      e.target.innerHTML = "Not Completed";
      e.target.className = "not_done";
    } else {
      is_done(parseInt(e.target.id));
      e.target.innerHTML = "COMPLETED";
      e.target.className = "done";
    }
  }
});

// // event listener to update the task ==> showing the update_bar
tasks_div.addEventListener("click", (e) => {
  let id = parseInt(e.target.id);
  if (e.target.className == "update") {
    update_content(id);
    update_bar.style.display = "block";
  }
});

// function to update content
const update_content = (id) => {
  update_bar.addEventListener("click", (e) => {
    if (e.target.className == "update_btn") {
      editTodo(id, update_input.value);
      render_task(to_do_list);
      update_bar.style.display = "none";
    }
  });
};

// loop over the to_do_list and create the every new task/update_input/buttons
const render_task = (to_do_list) => {
  tasks_div.innerHTML = "";
  to_do_list.forEach((task) => {
    // create a div that contain one new task
    let new_task = document.createElement("div");
    new_task.className = "new_task";
    new_task.id = task.id;

    // create the title of the new task
    let content = document.createElement("h3");
    content.innerHTML = `${task.name}`;
    new_task.appendChild(content);

    // div that contain all the 3 btns
    let buttons_div = document.createElement("div");
    buttons_div.className = "buttons_div";

    //create update btn, and appended it to the div of 3 btns
    let update = document.createElement("button");
    update.id = task.id;
    update.className = "update";
    update.innerHTML = "update";
    buttons_div.appendChild(update);

    //create a delete button, and appended it to the div of 3 btns
    let del = document.createElement("button");
    del.className = "delete";
    del.id = task.id;
    del.innerHTML = "delete";
    buttons_div.appendChild(del);

    //create done button, and appended it to the div of 3 btns
    // change the class name to change the style
    let is_done = document.createElement("button");
    if (task.is_done) {
      is_done.className = "done";
      is_done.innerHTML = "COMPLETED";
    } else {
      is_done.className = "not_done";
      is_done.innerHTML = "Not Completed";
    }
    is_done.id = task.id;
    buttons_div.appendChild(is_done);

    // append content and btns  tasks_div
    tasks_div.appendChild(new_task);

    // append the div of 3 btns to the div of one new task
    new_task.appendChild(buttons_div);
  });
};

// to do list with function
const to_do_list = [];

//function that add one task to the to_do_list:[]
const add = (name, is_done = false, id = 0) => {
  // if the list empty id = 0, if the list not empty id = the id of the last task +1
  if (to_do_list.length !== 0) {
    id = to_do_list[to_do_list.length - 1].id + 1;
  }

  to_do_list.push({
    name: name,
    is_done: is_done,
    id: id,
    date: new Date().toLocaleDateString(),
  });
};

const remove = (task_id) => {
  to_do_list.forEach((task, index) => {
    if (task.id === task_id) {
      to_do_list.splice(index, 1);
    }
  });
};

const is_done = (task_id) => {
  to_do_list.forEach((task, index) => {
    if (task.id === task_id) {
      task.is_done = !task.is_done;
    }
  });
};

const editTodo = (task_id, update) => {
  to_do_list.forEach((task) => {
    if (task.id === task_id) {
      task.name = update;
    }
  });
};

const search = (task_id) => {
  for (const task of to_do_list) {
    if (task.id === task_id) {
      return task;
    }
  }
};

const clear_all = () => {
  to_do_list.splice(0);
};

const get_items = () => {
  return to_do_list;
};
