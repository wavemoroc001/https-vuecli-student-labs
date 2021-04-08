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
      ],
       url : 'http://localhost:5000/surveyResults'
    }
  },
  methods: {
    addNewSurvey(newSurvey) {
      this.surveyResults.id = new Date().toISOString()
      this.surveyResults.name = newSurvey.name
      this.surveyResults.id = newSurvey.rating
      //this.surveyResults.push(newSurvey)
      this.postSurveyResult(newSurvey)
     // vm.$forceUpdate();

    },
    async fetchSurveyResult() {
      const res = await fetch(this.url)
      const data = await res.json()
      // parses JSON response into native JavaScript objects
      return data
    },
    async postSurveyResult(newSurvey) {
      await fetch(this.url,{
        method : 'POST',
        headers : {
          'Content-type' : 'application/json' 
        },
        body : JSON.stringify({
          'name': newSurvey.name,
          'rating' : newSurvey.rating
        })
      })
      
    },
  },
  async created() {
    this.surveyResults = await this.fetchSurveyResult(this.url)
  }
}
</script>
