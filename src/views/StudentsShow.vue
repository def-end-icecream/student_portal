<template>
  <div class="students-show">
    <div>
      <h1>{{ student.first_name }} {{ student.last_name }}</h1>
      <img :src="student.image_url" :alt="student.first_name" />
      <p>Email: {{ student.email }}</p>
      <p>Phone Number: {{ student.phone_number }}</p>
      <p>Short Bio: {{ student.short_bio }}</p>
      <a :href="student.linkedin_url" target="_blank">LinkedIn</a>
      <br />
      <a :href="`https://twitter.com/${student.twitter_handle}`" target="_blank"
        >Twitter</a
      >
      <br />
      <a :href="student.personal_website_url" target="_blank"
        >Personal Website</a
      >
      <br />
      <a :href="student.resume_url" target="_blank">Resume</a>
      <br />
      <a :href="student.github_url" target="_blank">GitHub</a>
      <br />
      <router-link :to="`/students/${student.id}/edit`">
        Edit Profile
      </router-link>
      <h1>Experience</h1>
      <router-link to="/experiences/new">New Experience</router-link>
      <div
        v-for="experience in student.experiences"
        v-bind:key="experience.start_date"
      >
        <h2>Job Title: {{ experience.job_title }}</h2>
        <p>Start Date: {{ formattedDate(experience.start_date) }}</p>
        <p>End Date: {{ formattedDate(experience.end_date) }}</p>
        <p>Company Name: {{ experience.company_name }}</p>
        <p>Details: {{ experience.details }}</p>

        <router-link :to="`/experiences/${experience.id}/edit`"
          >Edit Experience</router-link
        >
      </div>
      <h1>Education</h1>
      <router-link to="/educations/new"
        >Create Another Education Instance</router-link
      >
      <div
        v-for="education in student.educations"
        v-bind:key="education.start_date"
      >
        <h2>Degree: {{ education.degree }}</h2>
        <p>Start Date: {{ formattedDate(education.start_date) }}</p>
        <p>End Date: {{ formattedDate(education.end_date) }}</p>
        <p>University Name: {{ education.university_name }}</p>
        <p>Details: {{ education.details }}</p>
        <router-link :to="`/educations/${education.id}/edit`">Edit</router-link>
      </div>
      <h1>Skills</h1>
      <div v-for="skill in student.skills" v-bind:key="skill.name">
        <p>
          {{ skill.name }}
          <button v-on:click="removeSkill(skill)">x</button>
        </p>
      </div>
      <input type="text" v-model="newSkill" />
      <button v-on:click="addSkill()">Add</button>

      <h1>Capstone</h1>
      <router-link to="/capstones/new">Add New Capstone</router-link>
      <div
        v-for="capstone in student.capstones"
        v-bind:key="capstone.capstone_name"
      >
        <h2>Name: {{ capstone.name }}</h2>
        <a :href="capstone.url">Capstone URL</a>
        <p>Description: {{ capstone.description }}</p>
        <img :src="capstone.screenshot" />
        <router-link v-bind:to="`/capstones/${capstone.id}/edit`"
          >Edit Capstone</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  data: function() {
    return {
      student: {},
      newSkill: "",
    };
  },
  created: function() {
    axios.get(`/api/students/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.student = response.data;
    });
  },
  methods: {
    addSkill: function() {
      axios
        .post("/api/skills", { name: this.newSkill })
        .then((response) => {
          console.log(response);
          this.student.skills.push({ name: this.newSkill });
          this.newSkill = "";
        })
        .catch((error) => {
          this.status = error.response.status;
          this.errors = error.response.data.errors;
        });
    },
    removeSkill: function(skill) {
      axios
        .delete(`/api/skills/${skill.id}`)
        .then((response) => {
          console.log(response.data);
          var index = this.student.skills.indexOf(skill);
          this.student.skills.splice(index, 1);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    formattedDate: function(date) {
      return moment(date).format("MMM Do YY");
    },
  },
};
</script>
