<template>
  <div class="content">
    <div class="bodyCard">
      <div>
        <!-- Study Page Introduction -->
        <p>Welcome to the Study Page.</p>
        <p>Here Students will come to expand their knowledge and get free resources. </p>
        <p>Students have the opportunity to engage in study groups with their friends or peeps. </p>
        <p> Should the student have no friends or peeps, they are able to dabble with the online resources
          where Stoints (student points) are earned and redeemed in vouchers from various companies.
        </p>
      </div>
      <p> Please select either button below to get started: </p>
      <div class="container">
        <!-- Study Page Buttons which route to each page -->
        <router-link to="/StudyGroups" class="nav-link"><button id="studybuttons">Study Groups</button></router-link>
        <router-link to="/StudyMaterial" class="nav-link"><button id="studybuttons">Online Material</button>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
#studybuttons {
  border: 2px solid darkgray;
  border-radius: 10px;
  background-color: darkgray;
  margin: 5px 5px 5px 5px;
  padding: 10px;
}

#studybuttons:hover {
  background-color: rgb(96, 34, 59);
}
</style>