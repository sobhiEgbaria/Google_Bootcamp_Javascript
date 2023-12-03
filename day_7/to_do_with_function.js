// to do list with function
// class that make a one task

const to_do_list = [];

const add = (name, is_done = false, id = 1) => {
    if (to_do_list.length != 0) {
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

const clear_all = () => {
    to_do_list.splice(0);
};

const ge_items = () => {
    return to_do_list;
};

add("learn html");
add("learn javascript");
add("learn css");
add("learn python");
add("is_sone test");
add("update test");

console.log(ge_items());
remove(2);
console.log(ge_items());
is_done(5);
editTodo("the update is done");

console.log(ge_items());
console.log(search(1));
clear_all();
console.log(ge_items());
