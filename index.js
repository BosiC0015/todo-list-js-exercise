// A new task will be created as incomplete
function newTask(title, description) {
  const task ={
    title: title,
    description: description,
    complete: false,
    // prints out the provided task's details
    logState() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
    markCompleted() {
      this.complete = true;
    }
  };
  return task;
}


// DRIVER CODE BELOW
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];
// logTaskState(task1); // Clean Cat Litter has not been completed
// completeTask(task1);
// logTaskState(task1); // Clean Cat Litter has been completed
// console.log(tasks);
