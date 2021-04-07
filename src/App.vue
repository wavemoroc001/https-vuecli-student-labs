<template>
  <div class="w-screen h-screen">
    <div class="w-full h-full md:w-1/2">
      <div class="container">
        <img class="logo" alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld msg="Welcome to VueCLI project" />
      </div>
      <div class="container">
        <add-survet @submit-survey="addNewSurvey" :count-number="surveyResults.length"/>
      </div>
      <div class="container">
        <base-card>
          <ul v-for="result in surveyResults" :key="result.id">
            <li class="space-x-2">
              <span class="text-red-500">{{ result.id }}</span>
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
import HelloWorld from "./components/HelloWorld.vue";
import AddSurvet from "./components/survey/AddSurvey.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    AddSurvet,
  },data() {
    return{
      surveyResults : []
    }
  },
  methods: {
    async fetchSurveyResult() {
      const res = await fetch("http://localhost:5000/surveyResults");
      const data = await res.json();
      return data;
    },
    addNewSurvey (survey) {
      this.surveyResults = [... this.surveyResults,survey]
    }
  },
  async created() {
    this.surveyResults = await this.fetchSurveyResult();
  },
};
</script>
