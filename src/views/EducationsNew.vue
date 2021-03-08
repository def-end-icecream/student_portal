<template>
  <div class="educations-new">
    <div class="container">
      <form v-on:submit.prevent="educationNew()">
        <p v-if="!$parent.loggedIn()">Please log in to create post</p>
        <h1>Create New Post</h1>

        <ul>
          <li class="text-danger" v-for="error in errors" v-bind:key="error">
            {{ error }}
          </li>
        </ul>
        <div class="form-group">
          <label>Start Date:</label>
          <input type="text" class="form-control" v-model="start_date" /> <br />
        </div>
        <div class="form-group">
          <label>End Date:</label>
          <input type="text" class="form-control" v-model="end_date" /> <br />
        </div>
        <div class="form-group">
          <label>Degree:</label>
          <input type="text" class="form-control" v-model="degree" /> <br />
        </div>
        <div class="form-group">
          <label>University Name:</label>
          <input type="text" class="form-control" v-model="university_name" />
          <br />
        </div>
        <div class="form-group">
          <label>Details:</label>
          <input type="text" class="form-control" v-model="details" /> <br />
        </div>

        <input type="submit" class="btn btn-primary" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      start_date: "",
      end_date: "",
      degree: "",
      university_name: "",
      details: "",
      userId: "",
      errors: [],
      status: "",
    };
  },
  methods: {
    educationNew: function() {
      var params = {
        body: this.body,
        // user_id: this.userId,
      };
      axios
        .post("/api/posts", params)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/posts");
        })
        .catch((error) => {
          this.status = error.response.status;
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
