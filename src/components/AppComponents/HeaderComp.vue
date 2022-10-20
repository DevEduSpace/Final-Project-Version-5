<template>
  <header>
    <nav class="topnav">
      <!-- Top navigation -->
      <div class="topnav-left" v-if="$store.state.user">
        <!-- Left-aligned links (default) -->
        <!-- Only shows nav if user exists -->
        <img class="nav-link" src="/src/assets/EduspaceLogo.png" width="30" height="30" />
      </div>
      <div class="topnav-centered" v-if="$store.state.user">
        <!-- Centered link -->
        <router-link class="nav-link" tag="button" to="/study">Study</router-link>
        <router-link class="nav-link" tag="button" to="/tutoring">Tutoring</router-link>
        <router-link class="nav-link" tag="button" to="/forum">Forum</router-link>
        <router-link class="nav-link" tag="button" to="/rewards">Rewards</router-link>
        <router-link class="nav-link" tag="button" to="/profile">Profile</router-link>
        <button class="nav-link" tag="button" id="logout" @click="$store.dispatch('logout')">Logout</button>
      </div>
      <div class="topnav" v-else>
        <div class="topnav-centered">
          <img class="logo1" src="/src/assets/EduspaceLogo.png" width="60" height="60" />
          <label class="headerText">EduSpace</label>
          <img class="logo2" src="/src/assets/StellenboschUniversityLogo1.png" width="60" height="60" />
        </div>
        <!-- <div class="topnav-right"> -->
        <div class="topnav-right">
          <router-link class="nav-link" tag="button" to="/login">Login Page</router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import { onBeforeMount } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    onBeforeMount(() => {
      store.dispatch("fetchUser");
    });
  },
};
</script>

<style>
#header {
  height: 20px;
  background: #222;
  color: white;
}

.logo2 {
  background-color: white;
  border-radius: 50%;
}

.logo3 {
  padding: none;
  margin: none;
  display: block;
}

.topnav {
  background: rgb(96, 34, 59);
  font-weight: bold;
  color: black;
  position: relative;
  overflow: hidden;
}

.topnav a.router-link-exact-active {
  color: rgb(211, 211, 211);
  background: rgb(96, 34, 59);
  border-radius: 0.5rem;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: rgb(242, 242, 242);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: rgb(221, 221, 221);
  color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #04AA6D;
  color: white;
}

/* Centered section inside the top navigation */
.topnav-centered a {
  float: none;
}

/* Right-aligned section inside the top navigation */
.topnav-right {
  float: right;
}

/* Responsive navigation menu - display links on top of each other instead of next to each other (for mobile devices) */
@media screen and (max-width: 600px) {

  .topnav a,
  .topnav-right {
    float: none;
    display: block;
  }

  .topnav-centered a {
    position: relative;
    top: 0;
    left: 0;
    transform: none;
  }
}

.nav a {
  padding: 0 1rem;
  border-left: 1px solid transparent;
}

.logout,
.headerText {
  all: revert;
}

.headerText {
  font-size: large;
}

#logout {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

.nav-link,
#logout {
  color: rgb(211, 211, 211);
  text-decoration: none;
  padding-bottom: 20px;
  text-align: center;
}

#logout:hover {
  background-color: rgb(221, 221, 221);
  color: black;
}
</style>