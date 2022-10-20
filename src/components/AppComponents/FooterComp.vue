<template>
  <footer>
    <nav class="botnav">
      <div id="nav" onclick="document.documentElement.scrollTop = 0">
        <router-link class="nav-link" to="/aboutUs">About</router-link>
        <router-link class="nav-link" to="/cookiePolicy">Cookies</router-link>
        <router-link class="nav-link" to="/privacyPolicy">Privacy</router-link>
        <router-link class="nav-link" to="/termsConditions">Terms</router-link>
        <router-link class="nav-link" to="/contactUs">Contact</router-link>
      </div>
    </nav>
  </footer>
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
#footer {
  height: 20px;
  background: #222;
  color: white;
}

.botnav {
  background: rgb(96, 34, 59);
  opacity: 100%;
  padding: 15px;
  font-weight: bold;
  color: rgb(0, 0, 0);
  text-align: center;
}

/* Change the color of links on hover */
.botnav a:hover {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}
</style>