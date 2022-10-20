
<template>
  <div class="container">
    <div>
      <h1 id="bookingsession">Study Groups</h1>
    </div>
    <div>
      <button id="bookingheading">My Chats</button>
      <button id="bookingheading">Join Group</button>
      <button id="bookingheading">Session Updates</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudyGroups",
};
</script>

<style scoped>
#bookingsession {
  background-color: rgb(96, 34, 59);
  color: white;
  font-weight: bold;
  text-align: center;
  margin: 15px 15px 15px 15px;
  border: 1px solid black;
  margin: 5px;
}

#bookingheading {
  background-color: rgb(96, 34, 59);
  color: white;
  text-align: center;
  margin: 5px 5px 5px 5px;
  border: 1px solid black;
  margin: 5px;
  font: 1px;
}

#bookingcalender {
  background-color: rgb(96, 34, 59);
  color: white;
  font-weight: bold;
  text-align: center;
  margin: 15px 15px 15px 15px;
  border: 1px solid black;
  margin: 5px;
}
</style>
