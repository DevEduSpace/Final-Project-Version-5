<template>
  <div class="content">
    <div class="content">
      <div id="flex-container">
        <div id="firstelement">
          <h1>We're here to help</h1>
          <p>
            Send us a message if you have any questions or want to know more about
            us. We respond quickly!
          </p>
          <h3>Stellenbosch Office</h3>
          <h4>Physical Address:</h4>
          <p>4A Carpe Diem 26 Quantum Street Techno Park</p>

          <h4>Postal Address:</h4>
          <p>4A Carpe Diem 26 Quantum Street Techno Park</p>

          <h4>Contact our 24hour help line:</h4>
          <p>Tel: +27(0)79 790-6154</p>
        </div>
        <div id="contactfulldiv">
          <h3>Send us a message below:</h3>
          <div>
            <input id="contactdiv" v-model="formmessage1" placeholder="Name" />
          </div>
          <div>
            <input id="contactdiv" v-model="formmessage2" placeholder="Email Address" />
          </div>
          <div>
            <input id="contactdiv" v-model="formmessage3" placeholder="Phone Number" />
          </div>
          <div>
            <input id="contactdiv" v-model="formmessage4" placeholder="Message Us!" />
          </div>
          <div class="notification" v-for="log in logs" v-bind:key="log">
            {{ log.messageBody }}
          </div>
          <Button id="contactbutton" class="v--info" @click=onClick(clearChat)>Submit</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Positions } from "@meforma/vue-toaster";
import Toaster from "@meforma/vue-toaster";
import { db, auth } from '../../firebase/index.js';
import { doc, getDoc, setDoc, addDoc, collection } from "firebase/firestore";
export default {
  el: ".container",
  data() {
    return {

      formmessage1: "",
      formmessage2: "",
      formmessage3: "",
      formmessage4: "",
      message: "Message Sent!",
      logs: [],
    };
  },

  methods: {
    sendMessage() {
    },
    clearChat() {
      this.logs = [];
    },
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
      console.log("adding message")
      let ContactData = {
        formmessage1: this.formmessage1,
        formmessage2: this.formmessage2,
        formmessage3: this.formmessage3,
        formmessage4: this.formmessage4,
      }
      if (this.formmessage1 != "") {
        this.logs.push({
          formmessage1: this.formmessage1,
        });
        this.formmessage1 = "";
      }
      if (this.formmessage2 != "") {
        this.logs.push({
          formmessage2: this.formmessage2,
        });
        this.formmessage2 = "";
      }
      if (this.formmessage3 != "") {
        this.logs.push({
          formmessage3: this.formmessage3,
        });
        this.formmessage3 = "";
      }
      if (this.formmessage4 != "") {
        this.logs.push({
          formmessage4: this.formmessage4,
        });
        this.formmessage4 = "";
      }
      addDoc(collection(db, "Contact"), ContactData);
      console.log(e);

    },
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

#aboutheading {
  background-color: rgb(96, 34, 59);
  color: white;
  font-weight: bold;
  text-align: center;
  margin: 25px 25px 25px 25px;
  border: 1px solid black;
  margin: 10px;
}

#aboutcard {
  background-color: rgb(96, 34, 59);
  color: white;
  font-weight: bold;
  text-align: center;
  margin: 25px 25px 25px 25px;
  border: 1px solid black;
  padding: 30px;
}

/* The container */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container:hover input~.checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container input:checked~.checkmark {
  background-color: #2196f3;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked~.checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

#flex-container {
  display: flex;
  flex-direction: row;
  background-color: lightgray;
  opacity: 80%;
  border-radius: 15px;
  gap: 1rem;
  margin: 7px 7px 7px 7px;
  padding: 15px;
}

#contactdiv {
  border: 2px solid black;
  border-radius: 10px;
  margin: 5px 5px 5px 5px;
  align-content: center;
  width: 300px;
  height: 50px;
}

#contactbutton {
  background-color: rgb(96, 34, 59);
  border-radius: 10px;
  color: white;
  width: 300px;
  height: 50px;
  align-items: center;
  margin: 5px 5px 5px 5px;
}

#contactfulldiv {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>