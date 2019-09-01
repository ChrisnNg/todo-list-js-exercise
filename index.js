
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    completeTask: function() {
      this.complete = true;
    },

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed `);
    }

  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the poop out of the litter box"); // task 0
// const task2 = newTask("Do Laundry", "wash and dry"); // task 1

task1.logState();
task1.completeTask();
task1.logState();

