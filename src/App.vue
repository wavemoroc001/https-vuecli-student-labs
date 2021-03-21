<template>
  <div class="w-screen h-screen">
    <div class="w-full h-full">
      <div class="banner">
        <img class="logo" alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld class="topic" msg="Welcome to VueCLI project" />
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
