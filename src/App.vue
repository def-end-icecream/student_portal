<template>
  <div id="app">
    <div id="nav">
      <span v-if="isLoggedIn()">
        <router-link :to="`/students/${getStudentId()}`">
          Profile
        </router-link>
        |
      </span>
      <router-link v-if="isLoggedIn()" to="/logout">Logout</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
export default {
  methods: {
    isLoggedIn: function() {
      return localStorage.getItem("jwt");
    },
    getStudentId: function() {
      return localStorage.getItem("student_id");
    },
  },
};
</script>
