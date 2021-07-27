const todos = [
  { id: 1, text: 'HTML', isDone: true },
  { id: 2, text: 'CSS', isDone: true },
  { id: 3, text: 'JavaScript', isDone: true },
  { id: 4, text: 'React', isDone: false },
];

const index = todos.findIndex(todo => todo.id === 3);
console.log(index);

console.log('');

const todo = todos.find(todo => todo.id === 3);
console.log(todo);

console.log('');

const filteredTodos = todos.filter(todo => todo.isDone);
console.log(filteredTodos);
