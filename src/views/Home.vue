<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p>Hello World!</p>
    <p>heyo!</p>
    <p>Goodbye!</p>
    <p>Sarah was here!</p>
    <router-link to="/experiences/new">New Experience</router-link> |
    <router-link to="/experiences/:id/edit">Edit Experience</router-link>
  </div>
</template>

<style></style>

<script>
export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
    };
  },
  created: function() {},
  methods: {},
};
</script>
