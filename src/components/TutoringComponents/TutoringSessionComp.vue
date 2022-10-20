<script>
import { Positions } from "@meforma/vue-toaster";
export default {
  name: "TutorSession",
   data() {
      return {
        selected: "",
        modulemessage: "",
        message: "Session Created!",
        options: {
          duration: 4000,
         },
      };
    },
      rops: {
      msg: String,
    },
      omputed: {
       positions() {
         return Object.keys(Positions).map((key) => {
           return {
             key,
            value: Positions[key],
           name: Positions[key].replace(/-/, " "),
        };
      });
    },
    hasOptions() {
      return (
        this.options &&
        (Object.keys(this.options).length > 1 || this.options.duration !== 4000)
      );
    },
  },
  methods: {
    toast(type = "default", dismissible = true) {
      const options = {
        dismissible,
        onClick: this.onClick,
      };
      typeof type === "string" && (options.type = type);
      typeof this.options.maxToasts === "string" &&
        (this.options.maxToasts = parseInt(this.options.maxToasts));
      this.$toast.show(this.message, {
        ...options,
        ...this.options,
      });
    },
    changeDuration(e) {
      this.options.duration = !e.target.checked ? 4000 : false;
    },
    onClick(e) {
      console.log(e);
    },
  },
};
</script>
<template>
  <div class="flex-container">
    <div>
      <p>Module Name: {{ modulemessage }}</p>
      <input v-model="modulemessage" placeholder="Module: " />
    </div>
    <div>
      <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option>12:00</option>
        <option>13:00</option>
        <option>14:00</option>
      </select>
      <span>Available times: {{ selected }}</span>
    </div>
    <div>
      <button id="bookingcalender" @click="toast('info')">
        Schedule a Meeting
      </button>
    </div>
  </div>
</template>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: column;
  background-color: lightgray;
  opacity: 85%;
  border-radius: 10px;
  margin: 10px 10px 10px 10px;
  padding: 10px;
  align-items: center;
}

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