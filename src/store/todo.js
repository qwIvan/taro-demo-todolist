export default {
  state: {
    todos: []
  },
  reducers: {
    add({ todos }, todo) {
      todos.push(todo);
    }
  }
};
