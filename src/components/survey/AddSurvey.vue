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
            :checked="rating === 'poor'"
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
            :checked="rating === 'average'"
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
            :checked="rating === 'great'"
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
  props: {
    // editable: {
    //   type: Boolean,
    //   required: false,
    //   default: false
    // },
    oldId: {
      type: Number,
      required: false,
      default: null
    },
    oldName: {
      type: String,
      required: false,
      default: ''
    },
    oldRating: {
      type: String,
      required: false,
      default: null
    }
  },
  emits: ['survey-submit'],
  data() {
    return {
      id: this.oldId,
      enteredName: this.oldName,
      rating: this.oldRating,
      invalidNameInput: false,
      invalidRatingInput: false
    }
  },
  methods: {
    submitForm() {
      this.invalidNameInput = this.enteredName === '' ? true : false
      this.invalidRatingInput = this.rating === null ? true : false

      console.log(`name value: ${this.enteredName}`)
      console.log(`rating value: ${this.rating}`)
      console.log(`invalid name: ${this.invalidNameInput}`)
      console.log(`invalid rating: ${this.invalidRatingInput}`)
      if (!this.invalidNameInput && !this.invalidRatingInput) {
        const newSurveySubmitted = {
          id: this.id,
          name: this.enteredName,
          rating: this.rating
        }
        this.id = ''
        this.enteredName = ''
        this.rating = null
        this.$emit('survey-submit', newSurveySubmitted)
      }
    },

    validateName() {
      this.invalidNameInput = this.enteredName === '' ? true : false
      console.log(`name: ${this.invalidNameInput}`)
    }
  }
}
</script>
