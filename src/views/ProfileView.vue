<script>
import { stelliesEmail } from "../firebase/read"
//import { stelliesEmaill } from "../firebase/read"
import { auth, db } from '../firebase'
import { checkStelliesUser } from "../firebase/read"
//import {documentID} from "../firebase/read"
import { stelliesTest } from "../firebase/read";
import { stelliesSU } from "../firebase/read";
import { stelliesFaculty } from "../firebase/read";
import { stelliesDegree } from "../firebase/read";
import { stelliesFname } from "../firebase/read";
import { stelliesLname } from "../firebase/read";
stelliesSU()
stelliesEmail();
// console.log(auth.currentUser.uid);

//find current 

// async function stelliesEmail(documentID) {
//     documentID = auth.currentUser.uid;
//     const docRef = doc(db, "stellenbosch", documentID); // this finds emails in stellenbosch docs
//     try {
//         const docSnap = await getDoc(docRef);
//         const email = docSnap.data()["email"];
//         return email;
//         //return emailResult
//         //const emailResult = docSnap.data()["email"];
//     } catch (error) {
//         console.log(error)
//     }
// }
// export { stelliesEmail };


//hZ0NF37xAkx5liWrW55D




export default {
  data() {
    return {
      email: null,
      docID: null,
      SUnum: null,
      faculty: null,
      degree: null,
      Fname: null,
      Lname: null,
    };
  },
  mounted() {
    this.updateEmail();
    this.updateSUnum();
    this.getDocumentId();
    this.updateFaculty();
    this.updateDegree();
    this.updateFname();
    this.updateLname();
  },

  methods: {
    async updateEmail() {
      this.email = await stelliesEmail();
    },

    async getDocumentId() {
      this.docID = await stelliesTest();
    },

    async updateSUnum() {
      this.SUnum = await stelliesSU();
    },
    async updateFaculty() {
      this.faculty = await stelliesFaculty();
    },

    async updateDegree() {
      this.degree = await stelliesDegree();
    },

    async updateFname() {
      this.Fname = await stelliesFname();
    },

    async updateLname() {
      this.Lname = await stelliesLname();
    },


  }
};



</script> 

<template>
  <div class="rewards">
    <card id="eachcard">
      <img id="profpic" src="../assets/DefaultProfilePicture.JPG" width="300" height="300" />

      <p> Full Name: {{Fname}} {{Lname}}</p>
      <!-- <p> DocumentID :{{docID}}</p> -->
      <p> Email: {{email}}</p>
      <p>Student Number: {{SUnum}}</p>
      <p>Degree: {{degree}}</p>
      <p>Faculty: {{faculty}}</p>
    </card>
  </div>
</template>

<style>
@media (min-width: 2px) {
  .rewards {
    min-height: 100vh;
    display: flex;
  }

  #rewardsheading {
    background-color: rgb(96, 34, 59);
    color: white;
    font-weight: bold;
    text-align: center;
    margin: 25px 25px 25px 25px;
    border: 1px solid black;
    margin: 10px;
  }

  #eachcard {
    background-color: lightgrey;
    text-align: center;
    margin: 25px 25px 25px 25px;
    border: 2px solid black;
    margin: 10px;
    border-radius: 2px;
    opacity: 90%;
  }

  #profpic {
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    border: 10px solid rgb(96, 34, 59);
  }
}
</style>