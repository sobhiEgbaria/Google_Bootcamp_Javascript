const add_task = document.getElementById("btn");
const input = document.getElementById("input");
const tasks_div = document.getElementById("tasks");

add_task.addEventListener("click", () => {
  if (input.value !== "") {
    add(input.value);
    input.value = "";
  }
  render_task(to_do_list);
});

tasks_div.addEventListener("click", (e) => {
  if (e.target.className == "delete") {
    remove(parseInt(e.target.id));
    e.target.parentElement.parentElement.remove();
  }
});
tasks_div.addEventListener("click", (e) => {
  if (e.target.className == "not_done" || "done") {
    console.log(to_do_list[parseInt(e.target.id)].is_done);
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

// loop over the to_do_list and create the tasks with the buttons
const render_task = (to_do_list) => {
  tasks_div.innerHTML = "";
  to_do_list.forEach((task) => {
    // create a task with id
    let new_task = document.createElement("div");
    new_task.className = "new_task";
    new_task.id = task.id;

    let content = document.createElement("h3");
    content.innerHTML = `${task.name}`;
    new_task.appendChild(content);

    // div for all the btns
    let buttons_div = document.createElement("div");
    buttons_div.className = "buttons_div";

    //create update btn
    let update = document.createElement("button");
    update.id = task.id;
    update.className = "update";
    update.innerHTML = "update";
    buttons_div.appendChild(update);

    //create a delete button
    let del = document.createElement("button");
    del.className = "delete";
    del.id = task.id;
    del.innerHTML = "delete";
    buttons_div.appendChild(del);

    //create done button
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

    new_task.appendChild(buttons_div);
    // append content and btns  tasks_div
    console.log(to_do_list);
    tasks_div.appendChild(new_task);
  });
};

// to do list with function // class that make a one task
const to_do_list = [];

const add = (name, is_done = false, id = 0) => {
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
