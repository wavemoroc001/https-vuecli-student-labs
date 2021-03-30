<template>
  <div class="w-screen h-screen">
    <div class="w-full h-full md:w-1/2">
      <div class="container">
        <img class="logo" alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld msg="Welcome to VueCLI project" />
      </div>
      <!-- add or edit survey -->
      <div class="container">
        <add-survey
          v-if="isEdit"
          :oldId="oldId"
          :oldName="oldName"
          :oldRating="oldRating"
          @survey-submit="editSubmit"
        ></add-survey>

        <add-survey v-else @survey-submit="addNewSurvey"></add-survey>
      </div>

      <div class="container">
        <p v-if="errorMessage" class="text-red-500">
          {{ errorMessage }}
        </p>
      </div>

      <!-- display all survey result -->
      <div class="container">
        <ul v-for="result in surveyResults" :key="result.id">
          <base-card>
            <div class="flex flex-row items-center">
              <li class="p-2">
                <span class="text-purple-600 italic">{{ result.name }}</span>
                rated the learning experience
                <span class="text-green-600 italic">{{ result.rating }}</span>
              </li>
              <!-- :isEdit="isEdit" -->
              <div class="flex flex-col">
                <base-button
                  @btn-click="
                    editSurvey($event, result.id, result.name, result.rating)
                  "
                  bgcolor="bg-green-500"
                  txtcolor="text-white"
                  label="edit"
                  ><img src="./assets/edit.svg"
                /></base-button>
                <base-button
                  @btn-click="deleteSurvey($event, result.id)"
                  bgcolor="bg-red-600"
                  txtcolor="text-white"
                  label="x"
                ></base-button>
              </div>
            </div>
          </base-card>
        </ul>
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
      url: ' http://localhost:5000/surveyResults',
      errorMessage: null,
      oldId: '',
      oldName: '',
      oldRating: null,
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
      isEdit: false
    }
  },
  methods: {
    ///*add to variable in memory
    // addNewSurvey(newSurvey) {
    //   this.surveyResults.id = new Date().toISOString()
    //   this.surveyResults.name = newSurvey.name
    //   this.surveyResults.rating = newSurvey.rating
    //   this.surveyResults.push(newSurvey)
    // },

    ///* using promise.then() and promise.catch()
    // addNewSurvey(newSurvey) {
    //   this.surveyResults.name = newSurvey.name
    //   this.surveyResults.rating = newSurvey.rating
    //   this.errorMessage = null
    //   fetch(this.url, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       name: newSurvey.name,
    //       rating: newSurvey.rating
    //     })
    //     // body: {
    //     //   name: newSurvey.name,
    //     //   rating: newSurvey.rating
    //     // }
    //   })
    //     .then((response) => {
    //       if (response.ok) {
    //         console.log('your survey added successfully')
    //       } else {
    //         throw new Error('Could not add your survey!')
    //       }
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //       this.errorMessage = error.message
    //     })
    // },

    ///* or alternatilly using async-await
    async addNewSurvey(newSurvey) {
      const res = await fetch(this.url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          name: newSurvey.name,
          rating: newSurvey.rating
        })
      })
      const data = await res.json()
      //spread array
      this.surveyResults = [...this.surveyResults, data]
      //or add new item to the end of array
      // this.surveyResults.push(data)
    },

    async fetchSurveyResult() {
      const res = await fetch(this.url)
      const data = await res.json()
      // parses JSON response into native JavaScript objects
      return data
    },

    async deleteSurvey(passingData, id) {
      if (confirm(`Are you sure to delete (${passingData.label})?`)) {
        const res = await fetch(`${this.url}/${id}`, {
          method: 'DELETE'
        })
        res.status === 200
          ? (this.surveyResults = this.surveyResults.filter(
              (survey) => survey.id !== id
            ))
          : alert('Error to delete survey')
      }
    },
    editSurvey(passingData, editId, editName, editRating) {
      // this.isEdit = passingData.isEdit
      this.isEdit = true
      this.oldId = editId
      this.oldName = editName
      this.oldRating = editRating

      alert(
        ` ${passingData.label} mode: ${this.isEdit}, you want to edit current data {id: ${editId}, name: ${editName}, rating: ${editRating}}`
      )
    },
    async editSubmit(editingData) {
      const res = await fetch(`${this.url}/${editingData.id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          name: editingData.name,
          rating: editingData.rating
        })
      })
      const data = await res.json()
      this.surveyResults = this.surveyResults.map((survey) =>
        survey.id === data.id
          ? {
              ...survey,
              name: data.name,
              rating: data.rating
            }
          : survey
      )
      this.isEdit = false
    }
  },

  async created() {
    this.surveyResults = await this.fetchSurveyResult()
  }
}
</script>
