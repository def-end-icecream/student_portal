<template>
  <div class="educations-edit">
    <form v-on:submit.prevent="educationsEdit()">
      <h1>Update Experience</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Start Date:</label>
        <input
          type="text"
          class="form-control"
          v-model="education.start_date"
        />
      </div>
      <div class="form-group">
        <label>End Date:</label>
        <input type="text" class="form-control" v-model="education.end_date" />
      </div>
      <div class="form-group">
        <label>Degree:</label>
        <input type="text" class="form-control" v-model="education.degree" />
      </div>
      <div class="form-group">
        <label>University Name:</label>
        <input
          type="text"
          class="form-control"
          v-model="education.university_name"
        />
      </div>
      <div class="form-group">
        <label>Details:</label>
        <input type="text" class="form-control" v-model="education.details" />
      </div>
      <!-- <div class="form-group">
        <label>education Id:</label>
        <input type="text" class="form-control" v-model="education.educationId">
      </div> -->
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
    <button v-on:click="educationDestroy()">Delete Profile</button>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  data: function() {
    return {
      education: {
        start_date: "10/10/12",
        end_date: "10/10/13",
        degree: "best pup",
        university_name: "Weldin Academy",
        details: "learned to pee outside",
      },
      errors: [],
    };
  },
  // created: function() {
  //   axios.get(`/api/educations/${this.$route.params.id}`).then((response) => {
  //     console.log(response.data);
  //     this.education = response.data;
  //   });
  // },
  methods: {
    educationsEdit: function() {
      var params = {
        start_date: this.education.start_date,
        end_date: this.education.end_date,
        degree: this.education.degree,
        university_name: this.education.university_name,
        details: this.education.details,
        // education_id: this.post.educationId,
      };
      console.log(params);
      this.$router.push("/students/1");
      // axios
      //   .patch(`/api/educations/${this.$route.params.id}`, params)
      //   .then((response) => {
      //     console.log(response.data);
      //     this.$router.push(`/`);
      //   })
      //   .catch((error) => {
      //     this.errors = error.response.data.errors;
      //   });
    },
    // educationDestroy: function() {
    //   if (confirm("Are you sure you want to delete this education instance?")) {
    //     axios
    //       .delete(`/api/educations/${this.$route.params.id}`)
    //       .then((response) => {
    //         console.log(response.data);
    //         this.$router.push("/");
    //       });
    //   }
    // },
  },
};
</script>
