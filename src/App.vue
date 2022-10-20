<template>
  <div class="body">
    <HeaderComp /> <!-- Generates the header -->
    <HeadCardComp /> <!-- Dynamically generates a topic for each page, depending on its page name -->
    <router-view />
    <FooterComp /> <!-- Generates the footer -->
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import { onBeforeMount } from "vue";
import { useStore } from "vuex";

// Import Components
import HeaderComp from "./components/AppComponents/HeaderComp.vue";
import HeadCardComp from "./components/AppComponents/HeadCardComp.vue";
import FooterComp from "./components/AppComponents/FooterComp.vue";

export default {
  components:
  {
    HeaderComp,
    HeadCardComp,
    FooterComp
  },
  setup() {
    const store = useStore();
    onBeforeMount(() => {
      store.dispatch("fetchUser");
    });
  }
};
</script>

<style scoped>
.body {
  background-image: url("./assets/StellenboschBackground2.jpg");
  background-size: cover;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 20px;
}

.content {
  min-height: 370px;
}

.bodyCard {
  background-color: rgb(211, 211, 211, 85%);
  color: rgb(0, 0, 0);
  text-align: center;
  margin: 25px 25px 25px 25px;
  padding: 30px;
  border: 5px solid transparent;
  border-radius: 70px;
}

.bodyCardHead {
  color: rgb(0, 0, 0);
  font-weight: bold;
  text-align: center;
  text-decoration: underline;
}
</style>