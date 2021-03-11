<template>
  <div class="experiences-edit">
    <form v-on:submit.prevent="updateExperience(experience)">
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
      <input type="submit" value="Save Changes" />
      <input
        v-on:click="destroyExperience(experience)"
        type="button"
        value="Remove Experience"
      />
    </form>
  </div>
</template>

<script>
import axios from "axios";
// import moment from "moment";
export default {
  data: function() {
    return {
      experience: {
        start_date: "",
        end_date: "",
        job_title: "",
        company_name: "",
        details: "",
      },
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
          this.$router.push(`/students/${this.$parent.getStudentId()}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    destroyExperience: function() {
      if (confirm("Are you sure you want to delete this experience?")) {
        console.log("Deleted");
        axios
          .delete(`/api/experiences/${this.experience.id}`)
          .then((response) => {
            console.log(response.data);
            this.$router.push(`/students/${this.$parent.getStudentId()}`);
          });
      }
    },
    // formattedDate: function(date) {
    //   return moment(date).format("MMM Do YY");
    // },
  },
};
</script>
