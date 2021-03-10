<template>
  <div class="capstones-edit">
    <h1>Edit Capstone</h1>
    <form v-on:submit.prevent="updateCapstone(capstone)">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      Name:
      <input type="text" v-model="capstone.name" /><br />
      Description:
      <input type="text" v-model="capstone.description" /><br />
      URL:
      <input type="text" v-model="capstone.url" /><br />
      Screenshot:
      <input type="text" v-model="capstone.screenshot" /><br />

      <input type="submit" value="Update Capstone" />
    </form>
    <button v-on:click="destroyCapstone()">Destroy</button>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data: function() {
    return {
      capstone: {
        name: "test",
        description: "test",
        url: "test",
        screenshot: "test",
      },
      errors: [],
    };
  },
  created: function() {
    //   axios.get(`/api/capsotnes/${this.$route.params.id}`).then((response) => {
    //     console.log("capstone show", response);
    //     this.capstone = response.data;
    //   });
  },
  methods: {
    updateCapstone: function() {
      var params = {
        name: this.capstone.name,
        description: this.capstone.description,
        url: this.capstone.url,
        screenshot: this.capstone.screenshot,
      };
      console.log(params);
      this.$router.push("/students/1");

      //   axios
      //     .patch(`/api/capstones/${this.capstone.id}`, params)
      //     .then((response) => {
      //       console.log("capstone update", response);
      //       this.$router.push(`/capstones/${this.capstone.id}`);
      //     })
      //     .catch((error) => {
      //       console.log("post update error", error.response);
      //       this.errors = error.response.data.errors;
      //     });
      // },
      // destroyCapstone: function() {
      //   if (confirm("Are you 100% certain you want to delete this capstone?")) {
      //     axios.delete(`/api/capstones/${this.capstone.id}`).then((response) => {
      //       console.log(response.data);
      //       console.log("capstone deleted");
      //       this.$router.push("/capstones");
      //     });
      //   }
    },
  },
};
</script>
