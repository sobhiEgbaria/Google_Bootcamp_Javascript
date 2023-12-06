// to do list with function
let to_do_list = [];

`the next few lines in comment will fetch data from the API and render it to the page.
if you remove the comment it will work just fine, but the layout not that good,
and the completed button act act weird in some cases,
that not happens when you enter the tasks manually
that's why i leave it in comment.
you can try uncomment the fetch.
sorry for the long speech :)
`;

// // fetch the data and add it to the list then render the list to show thw data.
// fetch("https://jsonplaceholder.typicode.com/todos").then((res) => {
//   res.json().then((data) => {
//     to_do_list = data;
//     render_task(to_do_list, to_do_list);
//   });
// });

const add_task = document.getElementById("btn"); // btn add task onClick
const input = document.getElementById("input"); // input for the task title
const tasks_div = document.getElementById("tasks"); // div contain all the new tasks
const update_bar = document.getElementById("update_bar"); // div contain the input+btn update
const update_input = document.getElementById("update_input"); // input for the update

// update_bar display = disappear (make all the div disappear)
update_bar.style.display = "none";

// event listener to add task
add_task.addEventListener("click", () => {
  if (input.value !== "") {
    add(input.value);
    input.value = "";
  }
  render_task(to_do_list, to_do_list); // create the list from the beginning
});

// event listener to remove task
tasks_div.addEventListener("click", (e) => {
  if (e.target.className == "delete") {
    remove(parseInt(e.target.id));
    render_task(to_do_list, to_do_list); // create the list from the beginning
  }
});

// event listener to change is_done status
tasks_div.addEventListener("click", (e) => {
  if (e.target.className == "not_done" || e.target.className == "done") {
    if (to_do_list[parseInt(e.target.id)].completed) {
      is_done(parseInt(e.target.id));
      e.target.innerHTML = "Not Completed";
      e.target.className = "not_done";
    } else {
      is_done(parseInt(e.target.id));
      e.target.innerHTML = "COMPLETED";
      e.target.className = "done";
    }
  }
  render_task(to_do_list, to_do_list);
});

// // event listener to update the task ==> showing the update_bar
tasks_div.addEventListener("click", (e) => {
  let id = parseInt(e.target.id); // stor the task id
  if (e.target.className == "update") {
    update_bar.style.display = "block";
    update_content(id);
    update_input.value = "";
  }
});

// function to update content
const update_content = (id) => {
  update_bar.addEventListener("click", (e) => {
    if (e.target.className == "heading_update_btn") {
      editTodo(id, update_input.value);
      render_task(to_do_list, to_do_list); // create the list from the beginning
      update_bar.style.display = "none";
    }
  });
};

// // event listener to filter the task
tasks_div.addEventListener("click", (e) => {
  if (e.target.className == "Completed_btn") {
    let filtered_list = to_do_list.filter((task) => {
      return task.completed == true;
    });

    render_task(filtered_list, to_do_list);
  }

  if (e.target.className == "Active_btn") {
    console.log(e.target.className);
    let filtered_list = to_do_list.filter((task) => {
      return task.completed == false;
    });
    render_task(filtered_list, to_do_list);
  }

  if (e.target.className == "all_btn") {
    render_task(to_do_list, to_do_list);
  }
});

//clear all the tasks first ( tasks_div.innerHTML = "";)
// loop over the to_do_list and create the every new task/update_input/buttons
// if the list not empty create a filter btns
`the  `;
const render_task = (render_list, to_do_list) => {
  let is_Active = 0;
  let is_Completed = 0;
  for (const task of to_do_list) {
    if (task.completed == true) {
      is_Completed++;
    } else {
      is_Active++;
    }
  }
  tasks_div.innerHTML = "";
  if (to_do_list.length != 0) {
    //create div_filter for the filters_btn
    let div_filter = document.createElement("div");
    div_filter.className = "div_filter";
    tasks_div.appendChild(div_filter);

    //create a filters btns
    let all_btn = document.createElement("button");
    all_btn.className = "all_btn";
    all_btn.innerHTML = `<i class="fa-solid fa-list"></i> ${to_do_list.length}`;
    div_filter.appendChild(all_btn);

    let Active_btn = document.createElement("button");
    Active_btn.className = "Active_btn";
    Active_btn.innerHTML = `<i class="fa-solid fa-hourglass"></i> ${is_Active}`;
    div_filter.appendChild(Active_btn);

    let Completed_btn = document.createElement("button");
    Completed_btn.className = "Completed_btn";
    Completed_btn.innerHTML = `<i class="fa-solid fa-check"></i> ${is_Completed}`;
    div_filter.appendChild(Completed_btn);
  }

  //loop to create every new task
  render_list.forEach((task) => {
    // create a div that contain one new task
    let new_task = document.createElement("div");
    new_task.className = "new_task";
    new_task.id = task.id;

    // create the title of the new task
    let content = document.createElement("h4");
    content.innerHTML = `<i class="fa-sharp fa-solid fa-thumbtack"></i> ${task.title}`;
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
    if (task.completed) {
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

//function that add one task to the to_do_list:[]
const add = (title, completed = false, id = 0) => {
  // if the list empty id = 0, if the list not empty id = the id of the last task +1
  if (to_do_list.length !== 0) {
    id = to_do_list[to_do_list.length - 1].id + 1;
  }

  to_do_list.push({
    title: title,
    completed: completed,
    id: id,
    date: new Date().toLocaleDateString(),
  });
};

// delete a task from the to_do_list(array) by id
const remove = (task_id) => {
  to_do_list.forEach((task, index) => {
    if (task.id === task_id) {
      to_do_list.splice(index, 1);
    }
  });
};

// function that chang is_don status:  T-->F AND F-->T
const is_done = (task_id) => {
  for (const task of to_do_list) {
    if (task.id === task_id) {
      task.completed = !task.completed;
      break;
    }
  }
};

//edit a task by change the task title(name)
const editTodo = (task_id, update) => {
  to_do_list.forEach((task) => {
    if (task.id === task_id) {
      task.title = update;
    }
  });
};

// return an object of task by Id
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
