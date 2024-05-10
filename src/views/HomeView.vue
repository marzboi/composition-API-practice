<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>

    <h3>{{ ironman }}</h3>
    <h3>{{ hulk }}</h3>

    <button @click="changeIronman">Cambiar ironman</button>
    <button @click="changeHulk">Cambiar hulk</button>

    <h3>Ironman: {{ ironManIsAlive }}</h3>
    <h3>Hulk: {{ hulkIsAlive }}</h3>

    <button @click="changeStatus">Change status</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "Home",

  setup() {
    const ironman = ref({ name: "Tony", age: 50 });
    const hulk = reactive({ name: "Bruce", age: 50 });

    const ironManIsAlive = reactive(false);
    const hulkIsAlive = ref(true);

    const changeStatus = () => {
      hulkIsAlive.value = !hulkIsAlive.value;
    };

    return {
      ironman,
      hulk,

      ironManIsAlive,
      hulkIsAlive,

      changeStatus,

      changeIronman: () => {
        ironman.value.name = "Tony Stark";
        ironman.value.age = 51;
      },

      changeHulk: () => {
        hulk.name = "Bruce Banner";
        hulk.age = 51;
      },
    };
  },
};
</script>
