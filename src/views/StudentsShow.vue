<template>
  <div class="students-show">
    <div>
      <h1>Student Info</h1>
      <p>First Name: {{ student.first_name }}</p>
      <p>Last Name: {{ student.last_name }}</p>
      <p>Email: {{ student.email }}</p>
      <p>Phone Number: {{ student.phone_number }}</p>
      <p>Short Bio: {{ student.short_bio }}</p>
      <p>Linkedin URL: {{ student.linkedin_url }}</p>
      <p>Twitter handle: {{ student.twitter_handle }}</p>
      <p>Personal Website URL: {{ student.personal_website_url }}</p>
      <p>Online Resume URL: {{ student.resume_url }}</p>
      <p>Github URL: {{ student.github_url }}</p>
      <p>Photo: {{ student.image_url }}</p>
      <router-link :to="`/students/${student.id}/edit`"
        >Edit Profile</router-link
      >
      <h1>Experience</h1>
      <router-link to="/experiences/new">New Experience</router-link>
      <div v-for="experience in experiences" v-bind:key="experience.start_date">
        <h2>Job Title: {{ experience.job_title }}</h2>
        <p>Start Date: {{ experience.start_date }}</p>
        <p>End Date: {{ experience.end_date }}</p>
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
      <div v-for="education in educations" v-bind:key="education.start_date">
        <h2>Degree: {{ education.degree }}</h2>
        <p>Start Date: {{ education.start_date }}</p>
        <p>End Date: {{ education.end_date }}</p>
        <p>University Name: {{ education.university_name }}</p>
        <p>Details: {{ education.details }}</p>
        <router-link to="/educations/:id/edit">Edit</router-link>
      </div>
      <h1>Skills</h1>
      <div v-for="skill in skills" v-bind:key="skill.skill_name">
        <p>
          {{ skill.skill_name }}
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
        <p>URL: {{ capstone.url }}</p>
        <p>Description: {{ capstone.description }}</p>
        <p>Screenshot: {{ capstone.screenshot }}</p>
        <router-link v-bind:to="`/capstones/${capstone.id}/edit`"
          >Edit Capstone</router-link
        >
      </div>
    </div>
    <!-- <div v-if="student.user_id == $parent.getUserID()">
      <router-link :to="`/students/${student.id}/edit`">Edit</router-link>
    </div> -->
    <!-- <router-link :to="`/posts/${post.id}/edit`">Edit</router-link>
    <button v-on:click="postDestroy()">Delete Post</button> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
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
        image_url:
          "https://i.pinimg.com/236x/d2/de/71/d2de7134f98c49d1f27cb47f2f91d002--quakertown-pa-bloodhound.jpg",
      },
      experiences: [
        {
          start_date: "12/05/18",
          end_date: "03/08/21",
          job_title: "professional stick chaser",
          company_name: "stick catchers",
          details: "I ran after sticks",
        },
        {
          start_date: "11/06/18",
          end_date: "02/07/21",
          job_title: "guard dog",
          company_name: "scary dogs",
          details: "I bark at harmless nice people",
        },
      ],
      educations: [
        {
          start_date: "10/10/12",
          end_date: "10/10/13",
          degree: "best pup",
          university_name: "Weldin Academy",
          details: "learned to pee outside",
        },
      ],
      skills: [
        {
          skill_name: "chewing",
        },
        {
          skill_name: "sniffing",
        },
      ],
      newSkill: "",
      capstones: [
        {
          name: "toy directory",
          description: "catelog of toys",
          url: "mytoys.com",
          screenshot: "rope.jpg",
        },
        {
          name: "toy dir",
          description: "catelog of toys",
          url: "mytoys.com",
          screenshot: "rope.jpg",
        },
      ],
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
      console.log(this.newSkill);
      this.skills.push({ skill_name: this.newSkill });
      this.newSkill = "";
      axios
        .post("/api/skills", { skill_name: this.newSkill })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          this.status = error.response.status;
          this.errors = error.response.data.errors;
        });
    },
    removeSkill: function(skill) {
      var index = this.skills.indexOf(skill);
      this.skills.splice(index, 1);
      axios
        .delete(`/api/skills/${skill.id}`)
        .then((response) => {
          console.log(response.data);
          var index = this.skills.indexOf(skill);
          this.skills.splice(index, 1);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
