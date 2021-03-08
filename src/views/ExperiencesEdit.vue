<template>
  <div class="experiences-edit">
    <form v-on:submit.prevent="updateExperience()">
      <label for="experience">Start Date: </label>
      <input id="experience" type="text" v-model="experience.start_date" />
      <br />
      <label for="experience">End Date: </label>
      <input id="experience" type="text" v-model="experience.end_date" /> <br />
      <label for="experience">Job Title: </label>
      <input id="experience" type="text" v-model="experience.job_title" />
      <br />
      <label for="experience">Company Name: </label>
      <input id="experience" type="text" v-model="experience.company_name" />
      <br />
      <label for="experience">Details: </label>
      <input id="experience" type="text" v-model="experience.details" /> <br />
      <input
        v-on:click="updateExperience(experience)"
        type="submit"
        value="Save Changes"
      />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      experience: {},
      errors: [],
    };
  },
  created: function() {
    axios
      .get(`/api/experiences/${this.$route.params.id}`)
      .then((response) => {
        this.experience = response.data;
        console.log(this.experience);
      })
      .catch((error) => {
        console.log(error.response.data.errors);
      });
  },
  methods: {
    updateExperience: function() {
      var params = {
        start_date: this.experience.start_date,
        end_date: this.experience.end_date,
        job_title: this.experience.job_title,
        company_name: this.experience.company_name,
        details: this.experience.details,
      };
      axios
        .patch(`api/experiences/${this.experience.id}`, params)
        .then((response) => {
          console.log(response.data);
          this.$router.push(`/experiences/${this.experience.id}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
