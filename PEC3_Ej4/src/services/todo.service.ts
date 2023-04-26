/**
 * @class Service
 *
 * Manages the data of the application.
 */
class TodoService {
  todos: Todo[];
  onTodoListChanged: Function;
  constructor() {
    const localItems: string | null = localStorage.getItem('todos');
    if (localItems !== null) {
      this.todos = JSON.parse(localItems).map((todo: Todo) => new Todo(todo));
    } else {
      this.todos = [];
    }
    this.onTodoListChanged = Function;
  }

  bindTodoListChanged(callback: Function) {
    this.onTodoListChanged = callback;
  }

  _commit(todos: Todo[]) {
    this.onTodoListChanged(todos);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  addTodo(text: string) {
    this.todos.push(new Todo({text, complete: false}));

    this._commit(this.todos);
  }

  editTodo(id: string, updatedText: string) {
    this.todos = this.todos.map(todo =>
      todo.id === id
        ? new Todo({
            ...todo,
            text: updatedText,
          })
        : todo
    );

    this._commit(this.todos);
  }

  deleteTodo(_id: string) {
    this.todos = this.todos.filter(({id}) => id !== _id);

    this._commit(this.todos);
  }

  toggleTodo(_id: string) {
    this.todos = this.todos.map(todo =>
      todo.id === _id ? new Todo({...todo, complete: !todo.complete}) : todo
    );

    this._commit(this.todos);
  }
}
