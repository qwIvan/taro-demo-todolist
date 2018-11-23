export default {
  state: {
    todos: []
  },
  reducers: {
    add({ todos }, text) {
      const last = todos[todos.length - 1];
      const id = last ? last.id + 1 : 1;
      todos.push({ id, text });
    }
  }
};
