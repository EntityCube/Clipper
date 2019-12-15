
  // Initialize Firebase
  var config = {
  apiKey: "AIzaSyD6sORV2jRgY76Zs0juu_qqMWCQSXoq90E",
  authDomain: "clipboardentity.firebaseapp.com",
  databaseURL: "https://clipboardentity.firebaseio.com",
  projectId: "clipboardentity",
  storageBucket: "clipboardentity.appspot.com",
  messagingSenderId: "63119241242"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

  var dbRef = firebase.database().ref().child('Board'); // firebase text location
  var Board = document.getElementById("Board"); // Displaying location
  

  dbRef.on('value', snap => Board.innerText = snap.val());   // update board value
