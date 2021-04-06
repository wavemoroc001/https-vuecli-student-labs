<template>
  <div class="w-screen h-screen">
    <div class="w-full h-full md:w-1/2">
      <div class="container">
        <img class="logo" alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld msg="Welcome to VueCLI project" />
      </div>

      <div class="container">
        <div class="survey-container">
          <form @submit.prevent="submitForm">
            <base-card>
              <h2 class="heading">
                How was your Vue.js learning experience?
              </h2>

              <label class="label" for="name">Your Name</label>

              <input
                class="input"
                :class="{ 'bg-red-50': invalidNameInput }"
                id="name"
                type="text"
                v-model.trim="enteredName"
                @blur="validateName"
              />

              <p v-if="invalidNameInput" class="text-red-500">
                Please enter your name!
              </p>
            </base-card>

            <base-card>
              <h2 class="heading">My learning experience was ...</h2>

              <div>
                <input
                  type="radio"
                  name="rating"
                  id="rating-poor"
                  value="poor"
                  v-model="rating"
                />
                <label class="label" for="rating-poor">Poor</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="rating"
                  id="rating-avg"
                  value="average"
                  v-model="rating"
                />
                <label class="label" for="rating-avg">Average</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="rating"
                  id="rating-great"
                  value="great"
                  v-model="rating"
                />
                <label class="label" for="rating-great">Great</label>
              </div>
              <p v-if="invalidRatingInput" class="text-red-500">
                Please choose your learning experience!
              </p>
            </base-card>

            <button class="btn">
              Submit
            </button>
          </form>
          <base-card class="p-4 space-y-2">
            <h2 class="font-medium text-2xl">Survey Result</h2>
            <table class="table-auto justify-items-center border-collapse">
              <thead>
                <tr>
                  <td class="bb">Index</td>
                  <td class="bb">Name</td>
                  <td class="bb">Rating</td>
                </tr>
              </thead>
              <tr
                v-for="(survey, index) in SurveyResult"
                :key="survey.id"
                class="space-x-2"
              >
                <td class="bb" :class="{'bg-gray-200' : index%2 === 0}">{{ index }}</td>
                <td class="bb" :class="{'bg-gray-200' : index%2 === 0}">{{ survey.name }}</td>
                <td class="bb" :class="{'bg-gray-200' : index%2 === 0}">{{ survey.rating }}</td>
              </tr>
            </table>
          </base-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCard from "./components/BaseCard.vue";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    BaseCard,
  },
  data() {
    return {
      enteredName: "",
      rating: null,
      invalidNameInput: false,
      invalidRatingInput: false,
      SurveyResult: [],
      url: "http://localhost:5000/surveyResults",
    };
  },
  methods: {
    submitForm() {
      this.invalidNameInput = this.enteredName === "" ? true : false;
      this.invalidRatingInput = this.rating === null ? true : false;

      console.log(`name value: ${this.enteredName}`);
      console.log(`rating value: ${this.rating}`);
      console.log(`invalid name: ${this.invalidNameInput}`);
      console.log(`invalid rating: ${this.invalidRatingInput}`);
    },

    validateName() {
      this.invalidNameInput = this.enteredName === "" ? true : false;
      console.log(`name: ${this.invalidNameInput}`);
    },
    async fetchSurveyResult() {
      const res = await fetch(this.url);
      const data = await res.json();
      return data;
    },
  },
  async created() {
    this.SurveyResult = await this.fetchSurveyResult();
  },
};
</script>
