<template>
  <h1>To Do List</h1>
  <h4>Tareas pendientes: {{ pending.length }}</h4>

  <hr />
  <h4>Todas las tareas: {{ allTodos.length }}</h4>
  <h4>Completed: {{ completed.length }}</h4>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    return {
      pending: computed(() => store.getters["pendingTodos"]),
      allTodos: computed(() => store.getters["allTodos"]),
      completed: computed(() => store.getters["completedTodos"]),
    };
  },
};
</script>

<style></style>
