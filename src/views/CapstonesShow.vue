<template>
  <div class="capstones-show">
    <h2>Name: {{ capstone.name }}</h2>
    <h4>Description: {{ capstone.description }}</h4>
    <h4>{{ capstone.url }}</h4>
    <img v-bind:src="capstone.screenshot" alt="" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      capstone: {},
    };
  },
  created: function() {
    axios.get(`/api/capstones/${this.$route.params.id}`).then((response) => {
      console.log("capstone show", response);
      this.capstone = response.data;
    });
  },
  methods: {},
};
</script>
