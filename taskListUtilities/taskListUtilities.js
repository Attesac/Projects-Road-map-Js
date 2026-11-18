const tasks = [
    {id: 1, tittle: 'Review Variables', completed: true},
    {id: 2, tittle: 'Practice functions', completed: false}
];

function addTask(tasks, title){
    tasks.push({id: tasks.length + 1, title: title, completed: false})
    return tasks
}

function completeTask(tasks, taskId){
     return tasks.map(task => {
    if (task.id === taskId) {
      return { ...task, completed: true };
    }
    return task;
  });
}

function remove(tasks, taskId){
    return tasks.filter(tasks => tasks.id !== taskId)
}

function contIncompleteTasks(tasks){
    return tasks.filter(tasks => !tasks.completed).length
}


console.log(completeTask(tasks, 2))