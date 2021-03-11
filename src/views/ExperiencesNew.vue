<template>
  <div class="experiences-new">
    <form v-on:submit.prevent="createExperience()">
      <label for="experience">Start Date: </label>
      <input id="experience" type="text" v-model="start_date" /> <br />
      <label for="experience">End Date: </label>
      <input id="experience" type="text" v-model="end_date" /> <br />
      <label for="experience">Job Title: </label>
      <input id="experience" type="text" v-model="job_title" /> <br />
      <label for="experience">Company Name: </label>
      <input id="experience" type="text" v-model="company_name" /> <br />
      <label for="experience">Details: </label>
      <input id="experience" type="text" v-model="details" /> <br />
      <input type="submit" value="Add Experience" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      start_date: "",
      end_date: "",
      job_title: "",
      company_name: "",
      details: "",
      errors: [],
    };
  },
  methods: {
    createExperience: function() {
      var params = {
        start_date: this.start_date,
        end_date: this.end_date,
        job_title: this.job_title,
        company_name: this.company_name,
        details: this.details,
      };

      axios
        .post("api/experiences", params)
        .then((response) => {
          console.log(response.data);
          this.$router.push(`/students/${this.$parent.getStudentId()}`);
        })
        .catch((error) => {
          console.log(error.response.data.errors);
        });
    },
  },
};
</script>
