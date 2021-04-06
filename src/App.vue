<template>
  <div class="w-screen h-screen">
    <div class="w-full h-full md:w-1/2">
      <div class="container">
        <img class="logo" alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld msg="Welcome to VueCLI project" />
      </div>
      <div class="container">
        <add-survet />
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import AddSurvet from "./components/survey/AddSurvey.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    AddSurvet,
  },
};
</script>
