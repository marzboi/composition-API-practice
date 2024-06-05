import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [
      { id: "1", text: "Walk aorund y recolectar piedras", completed: false },
      { id: "2", text: "Run around and mess around", completed: true },
      { id: "3", text: "Cortarme el pelo", completed: false },
      { id: "4", text: "Dale lo hare yo mismo", completed: true },
      { id: "5", text: "Amongus por adelante", completed: false },
    ],
  },
  getters: {
    pendingTodos(state, getters, rootState) {
      return state.todos.filter((todo) => !todo.completed);
    },
    allTodos: (state, getters, rootState) => {
      return state.todos.filter((todo) => todo.completed);
    },
    completedTodos: (state, getters, rootState) => state.todos,
  },
  mutations: {},
  actions: {},
  modules: {},
});
