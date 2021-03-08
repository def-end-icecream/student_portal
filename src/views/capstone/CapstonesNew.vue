<template>
  <div class="capstones-new">
    <h1>New Capstone</h1>
    <form v-on:submit.prevent="createCaptone()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>

      Name:
      <input type="text" v-model="name" /><br />
      Description:
      <input type="text" v-model="description" /><br />
      URL:
      <input type="text" v-model="url" /><br />
      Screenshot:
      <input type="text" v-model="screenshot" /><br />

      <input type="submit" value="Create New Capstone" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      name: "",
      description: "",
      url: "",
      screenshot: "",
      errors: [],
    };
  },
  created: function() {},
  methods: {
    createCapstone: function() {
      var params = {
        title: this.title,
        description: this.description,
        url: this.url,
        screenshot: this.screenshot,
      };
      axios
        .post("/api/capstones", params)
        .then((response) => {
          console.log("capstone create", response);
          this.$router.push("/students/1");
        })
        .catch((error) => {
          console.log("post create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
