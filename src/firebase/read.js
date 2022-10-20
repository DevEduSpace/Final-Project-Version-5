import { auth, db } from '../firebase';
import { doc, getDoc, query, where, getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { collectionGroup } from 'firebase/firestore';

// async function stelliesEmaill() {
//     const docRef = doc(db, "stellenbosch", "hZ0NF37xAkx5liWrW55D");
//     const docSnap = await getDoc(docRef);
//     const email = docSnap.data()["email"];
//     return email
//  }
//   export {stelliesEmaill}; 



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

// const currentUserID = auth.currentUser.uid;
// const currentIdCheck = '"' + currentUserID + '"';
// export {currentIdCheck}
// export {currentUserID};

// checking if current user email is in stellenbosh one 
//const  currentUserEmail = auth.currentUser.email;

function checkStelliesUser(currentUserEmail) {
    if (currentUserEmail == stelliesEmail()) {
        return true
        console.log("works!")
    }
    else {
        return false
    }
}

export { checkStelliesUser };














//try 400 asyn function  <<<-from here
// async function stelliesEmaill() {
//     const docRef = doc(db, "stellenbosch", "hZ0NF37xAkx5liWrW55D");


//       const docSnap = await getDoc(docRef).then(function(dataC){

//           const stelEmail = dataC.data()["email"];
//           return stelEmail
//       }).then(function(stelEmail){
//           console.log(stelEmail);
//           //var emailArray = [];
//          // for (let i in stelEmail) {
//               //console.log(stelEmail[i])
//                //stelEmail[i];
//               //emailArray.push(stelEmail[i]);
//           }
//           // console.log(emailArray);

//       )};
//const emailResult = await docSnap.data()["email"];
//return docSnap;
//return emailResult;
//console.log(docSnap.data()["email"]);
//console.log(emailResult)

//    catch(error) {
//     console.log(error)
//   }

//export {stelliesEmaill}; 

// checking if current user email is in stellenbosh one 

// retirieving current doccument id, from stellenbosch databse, so data can be pul;led with other function

async function stelliesTest() {

    const q = query(collection(db, "stellenbosch"), where("email", "==", auth.currentUser.email));

    const snapshot = await getDocs(q);

    snapshot.forEach((doc) => {

        const dID = doc.id;
        return dID;
        //console.log(dID);
        //return doc.id, "=>", doc.data()["email"];
    })
}

export { stelliesTest };

//function for retrieving student number


// getting email form stellenbosch databse
async function stelliesEmail() {
    const dynamicID = "hZ0NF37xAkx5liWrW55D"
    // const dynamicID = await stelliesTest();
    const docRef = doc(db, "stellenbosch", dynamicID);
    const docSnap = await getDoc(docRef);
    const email = docSnap.data()["email"];
    return email;
}

export { stelliesEmail }

//fucntion to get student number:
async function stelliesSU() {
    const dynamicID = "hZ0NF37xAkx5liWrW55D"
    // const dynamicID = await stelliesTest();
    const docRef = doc(db, "stellenbosch", dynamicID);
    const docSnap = await getDoc(docRef);
    const SUnum = docSnap.data()["SU"];
    return SUnum;
};
//  console.log(SUnum)};
export { stelliesSU }

//function to get faculty:
async function stelliesFaculty() {
    const dynamicID = "hZ0NF37xAkx5liWrW55D"
    // const dynamicID = await stelliesTest();
    const docRef = doc(db, "stellenbosch", dynamicID);
    const docSnap = await getDoc(docRef);
    const SUnum = docSnap.data()["faculty"];
    return SUnum;
};
//  console.log(SUnum)};
export { stelliesFaculty }

//function to get faculty:
async function stelliesDegree() {
    const dynamicID = "hZ0NF37xAkx5liWrW55D"
    // const dynamicID = await stelliesTest();
    const docRef = doc(db, "stellenbosch", dynamicID);
    const docSnap = await getDoc(docRef);
    const degree = docSnap.data()["degree"];
    return degree;
};
//  console.log(SUnum)};
export { stelliesDegree }

//function to get first name :
async function stelliesFname() {
    const dynamicID = "hZ0NF37xAkx5liWrW55D"
    // const dynamicID = await stelliesTest();
    const docRef = doc(db, "stellenbosch", dynamicID);
    const docSnap = await getDoc(docRef);
    const Fname = docSnap.data()["fname"];
    return Fname;
};
//  console.log(SUnum)};
export { stelliesFname }

//function to get last name :
async function stelliesLname() {
    const dynamicID = "hZ0NF37xAkx5liWrW55D"
    // const dynamicID = await stelliesTest();
    const docRef = doc(db, "stellenbosch", dynamicID);
    const docSnap = await getDoc(docRef);
    const Lname = docSnap.data()["lname"];
    return Lname;
};
//  console.log(SUnum)};
export { stelliesLname }