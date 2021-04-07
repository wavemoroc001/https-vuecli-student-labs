<template>
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

      <base-button
        bgcolor="bg-purple-900"
        txtcolor="text-white"
        label="Submit"
      ></base-button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      enteredName: "",
      rating: null,
      invalidNameInput: false,
      invalidRatingInput: false,
      //surveyResults: [
        // {
        //   id: 1,
        //   name: "Umaporn",
        //   rating: "Great",
        // },
        // {
        //   id: 2,
        //   name: "Suda",
        //   rating: "Average",
        // },
      //]
    };
  },
  props: {
    countNumber: Number,
  },
  methods: {
    submitForm() {
      this.invalidNameInput = this.enteredName === "" ? true : false;
      this.invalidRatingInput = this.rating === null ? true : false;
      console.log(`${this.invalidNameInput}  :  ${this.invalidRatingInput}`);

      if ((this.invalidNameInput && this.invalidRatingInput) === false) {
        let entry = {
          id: this.countNumber+1,
          name: this.enteredName,
          rating: this.rating,
        };

        // let newSurvey = [];
        // newSurvey = [... this.surveyResults,entry]
        //this.surveyResults = [...this.surveyResults, entry];

        //this.surveyResults.push(entry);
        // console.log(`${this.surveyResults[this.surveyResults.length-1].id}`);
        // console.log(`${this.surveyResults[this.surveyResults.length-1].name}`);
        // console.log(`${this.surveyResults[this.surveyResults.length-1].rating}`);

        this.$emit("submit-survey", entry);
      }
    },
    validateName() {
      this.invalidNameInput = this.enteredName === "" ? true : false;
    },
  },
  //   watch: {
  //     fetchSurveyResults() {
  //       this.surveyResults = this.fetchSurveyResults;
  //     },
  //   },
};
</script>
