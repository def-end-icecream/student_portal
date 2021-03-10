<template>
  <div class="students-edit">
    <form v-on:submit.prevent="updateProfile()">
      <h1>Edit Profile</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>First name:</label>
        <input type="text" class="form-control" v-model="student.first_name" />
      </div>
      <div class="form-group">
        <label>Last name:</label>
        <input type="text" class="form-control" v-model="student.last_name" />
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="student.email" />
      </div>
      <div class="form-group">
        <label>Phone number:</label>
        <input type="text" class="form-control" v-model="student.phone_number" />
      </div>
      <div class="form-group">
        <label>Short bio:</label>
        <textarea class="form-control" v-model="student.short_bio"></textarea>
      </div>
      <div class="form-group">
        <label>Linkedin URL:</label>
        <input type="text" class="form-control" v-model="student.linkedin_url" />
      </div>
      <div class="form-group">
        <label>Twitter handle:</label>
        <input type="text" class="form-control" v-model="student.twitter_handle" />
      </div>
      <div class="form-group">
        <label>Personal Website URL:</label>
        <input type="text" class="form-control" v-model="student.personal_website_url" />
      </div>
      <div class="form-group">
        <label>Online Resume URL:</label>
        <input type="text" class="form-control" v-model="student.resume_url" />
      </div>
      <div class="form-group">
        <label>Github URL:</label>
        <input type="text" class="form-control" v-model="student.github_url" />
      </div>
      <div class="form-group">
        <label>Image URL:</label>
        <input type="text" class="form-control" v-model="student.image_url" />
      </div>
      <input type="submit" class="btn btn-primary" value="Update" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      errors: [],
      student: {
        first_name: "Alice",
        last_name: "Evans",
        email: "a@gmail.com",
        phone_number: "111-222-3333",
        short_bio: "I love sticks",
        linkedin_url: "linkedin.com",
        twitter_handle: "@alice",
        personal_website_url: "alice.com",
        resume_url: "aliceresume.com",
        github_url: "alicegit",
        image_url: "https://i.pinimg.com/236x/d2/de/71/d2de7134f98c49d1f27cb47f2f91d002--quakertown-pa-bloodhound.jpg",
      },
    };
  },
  created: function() {
    axios.get(`/api/students/${this.$route.params.id}`).then(response => {
      this.student = response.data;
    });
  },
  methods: {
    updateProfile: function() {
      var params = {
        first_name: this.student.first_name,
        last_name: this.student.last_name,
        email: this.student.email,
        phone_number: this.student.phone_number,
        short_bio: this.student.short_bio,
        linkedin_url: this.student.linkedin_url,
        twitter_handle: this.student.twitter_handle,
        personal_website_url: this.student.personal_website_url,
        resume_url: this.student.resume_url,
        github_url: this.student.github_url,
        image_url: this.student.image_url,
      };

      console.log("profile updated!", params);
      this.$router.push(`/students/${this.$route.params.id}`);
      // axios
      //   .patch(`/api/students/${this.student.id}`, params)
      //   .then(response => {
      //     console.log(response.data);
      //     this.$router.push(`/students/${this.student.id}`);
      //   })
      //   .catch(error => {
      //     this.errors = error.response.data.errors;
      //   });
    },
  },
};
</script>
