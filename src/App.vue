<template>
  <div class="w-screen h-screen">
    <div class="w-full h-full md:w-1/2">
      <div class="container">
        <img class="logo" alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld msg="Welcome to VueCLI project" />
      </div>

      <div class="container">
        <div class="survey-container">
          <form action="" @submit.prevent="validateForm">
            <div>
              <h2 class="heading">
                How was your Vue.js learning experience?
              </h2>
              <label class="label" for="name">Your Name</label>
              <input class="input" id="name" type="text" v-model="username" ref="name" />
              <h3 class="show-error" v-if="isUsernameValidate">Pleas fill your name</h3>
            </div>

            <div>
              <h2 class="heading">My learning experience was ...</h2>

              <div>
                <input
                  type="radio"
                  name="rating"
                  id="rating-poor"
                  v-model="rating"
                  value="poor"
                  autofocus
                />
                <label class="label" for="rating-poor">Poor</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="rating"
                  id="rating-avg"
                  v-model="rating"
                  value="avg"
                  autofocus
                />
                <label class="label" for="rating-avg">Average</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="rating"
                  id="rating-great"
                  v-model="rating"
                  value="great"
                  autofocus
                />
                <label class="label" for="rating-great">Great</label>
              </div>
            </div>
            <h3 class="show-error" v-if="isRatingValidate">Choose your Experience!</h3>
            <button class="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      username: null,
      rating: null,
      isUsernameValidate: null,
      isRatingValidate: null,
    };
  },
  methods: {
    validateForm() {
      //this.isUsernameValidate = this.username ? true : false;
      this.isRatingValidate = this.rating ? false : true ;

      if (this.username) this.isUsernameValidate = false;
      else {
        this.isUsernameValidate = true;
        this.$refs.name.focus()
      }
      alert("Finished !")
    },
  },
};
</script>
