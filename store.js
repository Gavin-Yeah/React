/*

setup process

<script src="https://www.gstatic.com/firebasejs/7.2.3/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.2.3/firebase-firestore.js"></script>

npm install firebase@7.2.3 --save

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

*/

/*
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: '### FIREBASE API KEY ###',
    authDomain: '### FIREBASE AUTH DOMAIN ###',
    projectId: '### CLOUD FIRESTORE PROJECT ID ###'
  });
  
  var db = firebase.firestore();
  
*/

function createUserPro(userID, Pic, /*... other attr in profile*/) {
    //the firebase version seems to be different?
    
    //get the file obj
    var pic_file = Pic;
    
    //create the storage ref
    var storageRef = firebase.storage().ref("Pics/"+userID);
    
    //Upload file
    storageRef.put(pic_file);
    
    /////////////////////////////////////
    db.collection("users").doc(userID).set({
        first: "dengke",
        last: "tang",
        born: 1815
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

function getUserPro(userID, Pic, /*... other attr in profile*/) {
    var docRef = db.collection("users").doc(userID);
    docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            /*  doc.data is the profiles */
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });

    var picRef = db.collection("Pics").doc(userID);
    picRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            /*  doc.data is the picture */
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });

}
