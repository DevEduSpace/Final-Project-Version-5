<template>
  <div class="content">
    <div id="bodyCard">
      <!-- Using the Stoints Component  -->
      <StointsComp></StointsComp>
    </div>
  </div>
</template>

<script>
import StointsComp from "/src/components/PointsComponents/StointsComp.vue";

export default {
  components: {
    StointsComp,
  },
  setup() { },
}
</script>

<style>
@media (min-width: 2px) {
  .rewards {
    min-height: 100vh;
    display: flex;
  }
}
</style>