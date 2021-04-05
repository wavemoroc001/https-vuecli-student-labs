<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <span class="text-cyan-400">with tailwindCSS Framework</span>
    <span class="text-salmon">and custom salmon color</span>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>
