<template>
  <div class="w-screen h-screen">
    <div class="w-full h-full md:w-1/2">
      <div class="container">
        <img class="logo" alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld msg="Welcome to VueCLI project" />
      </div>

      <div class="container">
        <add-survey @survey-submit="addNewSurvey"></add-survey>
      </div>

      <div class="container">
        <base-card>
          <ul v-for="result in surveyResults" :key="result.id">
            <li>
              <span class="text-purple-600 italic">{{ result.name }}</span>
              rated the learning experience
              <span class="text-green-600 italic">{{ result.rating }}</span>
            </li>
          </ul>
        </base-card>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AddSurvey from './components/survey/AddSurvey.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    AddSurvey
  },
  data() {
    return {
      surveyResults: [
        // {
        //   id: 1,
        //   name: 'Umaporn',
        //   rating: 'Great'
        // },
        // {
        //   id: 2,
        //   name: 'Suda',
        //   rating: 'Average'
        // }
      ]
    }
  },
  methods: {
    addNewSurvey(newSurvey) {
      this.surveyResults.id = new Date().toISOString()
      this.surveyResults.name = newSurvey.name
      this.surveyResults.id = newSurvey.rating
      this.surveyResults.push(newSurvey)
    },
    async fetchSurveyResult() {
      const res = await fetch('http://localhost:5000/surveyResults')
      const data = await res.json()
      // parses JSON response into native JavaScript objects
      return data
    }
  },
  async created() {
    this.surveyResults = await this.fetchSurveyResult()
  }
}
</script>
