<template>
  <div class="bodyCard">
    <div id="bookingsession">
      <h3>Please select a date</h3>

      <div class="flex-container">
        <div>
          <div>
            <div>
              <input type="date" class="form-control" v-model="bookingDate" />
            </div>
            <pre>Selected date is - {{ bookingDate }}</pre>
          </div>
          <div>
            <select v-model="timeSelected">
              <option disabled value="">Please select one</option>
              <option>12:00</option>
              <option>13:00</option>
              <option>14:00</option>
            </select>
            <span>timeSelected: {{ timeSelected }}</span>
          </div>

          <div class="radio-containers">
            <input type="radio" name="radio" v-model="tutorSelect" value="Julia Stone" id="tutorSelect-JuliaStone"
              checked="checked">
            <label class="container" for="tutorSelect-JuliaStone">Julia Stone
            </label>
            <input type="radio" name="radio" v-model="tutorSelect" value="Pieter Pienaar"
              id="tutorSelect-PieterPienaar">
            <label class="container" for="tutorSelect-PieterPienaar">Pieter Pienaar
            </label>
            <input type="radio" name="radio" v-model="tutorSelect" value="Danie Needham" id="tutorSelect-DanieNeedham">
            <label class="container" for="tutorSelect-DanieNeedham">Danie Needham
            </label>
            <input type="radio" name="radio" v-model="tutorSelect" value="Johan Hyman" id="tutorSelect-JohanHyman">
            <label class="container" for="tutorSelect-JohanHyman">Johan Hyman
            </label>
          </div>
          <label>Selected: {{ tutorSelect }}</label>
          <input type="submit" value="Register" />

          <div class="c-grid">         <!-- the @click=onclick helps us track the action of the button so that we can store the data with our function and clear the input from the screen. -->
            <Button class="v--info" @click="onClick(toast('info'))">Book Now!</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Toaster from "@meforma/vue-toaster"; //notification popup on screen
import { Positions } from "@meforma/vue-toaster";
import { CAlert } from "@coreui/bootstrap-vue";
import { doc, getDoc, setDoc, addDoc, collection } from "firebase/firestore"; //used to minipulate our database to read and write to it
import { auth, db } from '../../firebase/index.js' //importing the authentication to get the user id as well as the db database where the data is stored

export default {
  data() {
    return {      // return the data from the html so that the values can be stored
      bookingDate: "",
      timeSelected: "",
      tutorSelect: "",
      message: "Tutor Booked!",
      options: {
        duration: 4000,
      },
    };
  },
  props: {
    msg: String,
  },
  computed: {
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
    toast(type = "default", dismissible = true) {  // this is the notification pop-up
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
    changeDuration(e) {  // determins how long the pop-up will show on the screen
      this.options.duration = !e.target.checked ? 4000 : false;
    },
    onClick(e) {    // tracks the onClick action and uses addDoc to write the data to the db database under the collection "booking"
      console.log("adding booking")
      let fbData = {
        userId: auth.currentUser.uid,
        bookingDate: this.bookingDate,
        timeSelected: this.timeSelected,
        tutorSelect: this.tutorSelect,

      }
      addDoc(collection(db, "booking"), fbData);
      console.log(e);
    },
  },
};

</script>
<style scoped>
#bookingsession {
  background-color: rgb(96, 34, 59);
  color: white;
  font-weight: bold;
  text-align: center;
  margin: 15px 15px 15px 15px;
  border: 2px solid black;
}

#bookingcalender {
  background-color: rgb(96, 34, 59);
  color: white;
  font-weight: bold;
  text-align: center;
  margin: 15px 15px 15px 15px;
  border: 2px solid black;
}

.form-group {
  border: 2px solid black;
  background-color: rgb(96, 34, 59);
  color: white;
  font-weight: bold;
  text-align: center;
  margin: 15px 15px 15px 15px;
}

#two {
  color: white;
  border: 2px solid black;
  border-radius: 90%;
}
</style>