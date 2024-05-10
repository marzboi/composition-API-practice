<template>
  <h1>Counter View</h1>
  <h2>{{ counter }}</h2>

  <button @click="increase">+1</button>
  <button @click="decrease">-1</button>
</template>

<script>
import useCounter from "@/composables/useCounter";

export default {
  name: "counter",
  props: {},
  emits: [],

  setup() {
    const { counter, increase, decrease } = useCounter(10);

    return {
      counter,

      increase,
      decrease,
    };
  },
};
</script>

<style></style>

<!-- export default {
  name: "counter",
  props: {},
  emits: [],
  setup() {
    const counter = ref(0);

    // const increase = () => {
    //   counter.value++;
    // };

    // const decrease = () => {
    //   counter.value--;
    // };

    return {
      counter,

      decrease: () => counter.value--,
      increase: () => counter.value++,
    };
  },
}; -->
