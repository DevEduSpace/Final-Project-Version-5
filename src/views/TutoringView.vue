<template>
  <div class="content">
    <div class="bodyCard">
      <div class="container">
        <div>
          <!-- Tutor Page Introduction -->
          <p>Welcome to the Tutor Page.</p>
          <p>Here Students will come to book a session with a Tutor</p>
          <p>Students have the opportunity to book a date, a time and a specified Tutor of their choosing. </p>
          <p>Tutors are also able to create a session of their choosing with the specified module name
            and time for the student to book with them.
          </p>
        </div>
        <div>
          <router-link to="/tutoringbooking" class="nav-link"><button class="createsession">Make a Booking</button>
          </router-link>
        </div>
        <div>
          <router-link to="/tutoringsession" class="nav-link"><button class="createsession">Create a Session</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import TutoringBooking from "/components/TutoringComponents/TutoringBooking.vue";
import { RouterLink, RouterView } from "vue-router";
export default {};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>