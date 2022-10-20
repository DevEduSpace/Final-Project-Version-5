<template>
  <div class="content">
    <div class="bodyCard">
      <div class="flex-container">
        <h3>EduSpace Chat Forum</h3>
        <p>Chat with other students in this forum!</p>
        <div id="previousquestions">
          <!-- Previous Questions -->
          <h5>Previous Questions Asked..</h5>
          <button class="inputbuttons">When is the exam?</button>
          <button class="inputbuttons">What do I need to pass?</button>
          <button class="inputbuttons">What can I do for extra credit?</button>
          <button class="inputbuttons">How many quizzes before I get an A?</button>
        </div>
        <div class="notification" v-for="log in logs" v-bind:key="log">
          {{ log.messageBody }}
          <!-- Binding the message  -->
        </div>
        <input class="input" v-model="messageInput" @keyup.enter="sendMessage" type="text" />
        <!-- Send message on enter key  -->
        <div class="control is-grouped">
          <p class="control">
            <button class="inputbuttons" @click="sendMessage">Send</button> <!-- Will send the message  -->
          </p>
          <p class="control">
            <button class="inputbuttons" @click="clearChat">Clear Chat</button> <!-- Will clear the messages  -->
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  el: ".container",
  data() {
    return {   // this returns the message "messageInput" that the user was typing so that it can be saved to the database.
      messageInput: "Typing...",
      logs: [],
    };
  },
  methods: {
    sendMessage() {
      if (this.messageInput != "") { // this if statement clears the user input on the screen 
        this.logs.push({
          messageBody: this.messageInput,
        });
        this.messageInput = "";
      }
    },
    clearChat() {
      this.logs = [];
    }
  }
}
</script>

<style scoped>
body {
  margin-top: 10px;
}

.input {
  margin-bottom: 10px;
}

.flex-container {
  display: flex;
  flex-direction: column;
  background-color: lightgray;
  opacity: 85%;
  border-radius: 10px;
  margin: 10px 10px 10px 10px;
  padding: 20px;
  align-items: center;
}

.input {
  border: 2px solid black;
  border-radius: 10px;
  padding: 20px;
  margin: 10px 10px 10px 10px;
}

.inputbuttons {
  border: 2px solid black;
  border-radius: 10px;
  height: 50px;
  width: 300px;
  background-color: rgb(96, 34, 59);
  color: white;
  padding: 10px;
  margin: 10px 10px 10px 10px;
}

#previousquestions {
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 10px 10px 10px;
  align-items: center;
}
</style>