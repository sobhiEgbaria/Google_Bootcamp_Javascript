let to_do_list = [];

`the next few lines in comment will fetch data from the API and render it to the page.
if you remove the comment it will work just fine, but the layout not that good,
and the completed button act act weird in some cases,
that not happens when you enter the tasks manually
that's why i leave it in comment.
you can try uncomment the fetch.
sorry for the long speech :)
`;

// fetch the data and add it to the list then render the list to show thw data.
// for (let i = 0; i < 10; i++) {
//   fetch(`https://jsonplaceholder.typicode.com/todos/${i}`).then((res) => {
//     res.json().then((data) => {
//       to_do_list.push(data);
//       render_task(to_do_list, to_do_list);
//     });
//   });
// }

const add_task = document.getElementById("btn"); // btn add task onClick
const input = document.getElementById("input"); // input for the task title
const tasks_div = document.getElementById("tasks"); // div contain all the new tasks
const update_bar = document.getElementById("update_bar"); // div contain the input+btn update
const update_input = document.getElementById("update_input"); // input for the update

// update_bar display = make all the div disappear
update_bar.style.display = "none";

// event listener to Add task button, to add new task with add button
add_task.addEventListener("click", () => {
  if (input.value !== "") {
    add(input.value);
    input.value = "";
  }
  render_task(to_do_list, to_do_list); //render and create the tasks
});

// event listener to input, to add new task with Enter
input.addEventListener("keypress", (e) => {
  if (input.value !== "" && e.key == "Enter") {
    add(input.value);
    input.value = "";
  }
  render_task(to_do_list, to_do_list); //render and create the tasks
});

// event listener to delete button
tasks_div.addEventListener("click", (e) => {
  if (e.target.className == "delete") {
    remove(parseInt(e.target.id)); // cast the id string to number
    render_task(to_do_list, to_do_list); // create the list from the beginning
  }
});

// event listener to COMPLETED button change is_done status true and false
tasks_div.addEventListener("click", (e) => {
  if (e.target.className == "not_done" || e.target.className == "done") {
    // if .completed is true --> false, else if false --> true
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
    update_bar.style.display = "block"; // show the div (input and edit button)
    update_content(id); // call update_content function
    update_input.value = ""; // clear the input
  }
});

// function to update content will.
// the function have eventListener on click will call editTodo function.
const update_content = (id) => {
  update_bar.addEventListener("click", (e) => {
    if (
      e.target.className == "heading_update_btn" &&
      update_input.value !== ""
    ) {
      editTodo(id, update_input.value); // editTodo with the input value
      render_task(to_do_list, to_do_list);
      update_bar.style.display = "none"; // the update_bar will disappear
    }
  });
};

// // event listener to filter the task
tasks_div.addEventListener("click", (e) => {
  // filter, return the Completed tasks, render
  if (e.target.className == "Completed_btn fa-solid fa-check") {
    let filtered_list = to_do_list.filter((task) => {
      return task.completed == true;
    });

    render_task(filtered_list, to_do_list);
  }

  // filter, return the Active tasks, render
  if (e.target.className == "Active_btn fa-solid fa-hourglass Active_btn") {
    let filtered_list = to_do_list.filter((task) => {
      return task.completed == false;
    });
    render_task(filtered_list, to_do_list);
  }
  //render all the task
  if (e.target.className == "all_btn fa-solid fa-list all_btn") {
    render_task(to_do_list, to_do_list);
  }
});

// to the render function
`the render function get tow arguments, 1.render_list 2.to_do_list
render_list = the list that will be render could be 1.full list 2.filtered list
to_do_list = always the full list (not filtered).

the main reason to do this, when i sent filtered list to render, i lose the filtered. 
and inside the render function i need the hole data to calculate completed,Active.... and more
`;
//clear all the tasks first.
// if the full list not empty, create a filter btns
// loop over the render_list and create the every new task/update_input/buttons
const render_task = (render_list, to_do_list) => {
  // clear the tasks_div
  tasks_div.innerHTML = "";

  // tow counters to calculate completed and active task
  let is_Active = 0;
  let is_Completed = 0;
  for (const task of to_do_list) {
    if (task.completed == true) {
      is_Completed++;
    } else {
      is_Active++;
    }
  }

  if (to_do_list.length != 0) {
    //Create div_filter will contain all the filters buttons
    let div_filter = document.createElement("div");
    div_filter.className = "div_filter";
    tasks_div.appendChild(div_filter);

    //Create the 3 filters buttons (ALL,COMPLETED,ACTIVE)
    let all_btn = document.createElement("button");
    all_btn.className = "all_btn fa-solid fa-list all_btn";
    all_btn.innerHTML = ` ${to_do_list.length}`;
    div_filter.appendChild(all_btn);

    let Active_btn = document.createElement("button");
    Active_btn.className = "Active_btn fa-solid fa-hourglass Active_btn";
    Active_btn.innerHTML = `  ${is_Active}`;
    div_filter.appendChild(Active_btn);

    let Completed_btn = document.createElement("button");
    Completed_btn.className = "Completed_btn fa-solid fa-check";
    Completed_btn.innerHTML = `  ${is_Completed}`;
    div_filter.appendChild(Completed_btn);
  }

  //loop to create every new task with (title, update, delete, is_don buttons)
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
    update.innerHTML = "EDIT";
    buttons_div.appendChild(update);

    //create a delete button, and appended it to the div of 3 btns
    let del = document.createElement("button");
    del.className = "delete";
    del.id = task.id;
    del.innerHTML = "DELETE";
    buttons_div.appendChild(del);

    //create is_done button, and appended it to the div of 3 btns
    // change the class name to change the style
    let is_done = document.createElement("button");
    if (task.completed) {
      is_done.className = "done";
      is_done.innerHTML = "COMPLETED";
    } else {
      is_done.className = "not_done";
      is_done.innerHTML = "NOT COMPLETED";
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
