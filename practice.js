
var firebaseConfig = {
    apiKey: "AIzaSyCGOHPH-PB31rch6RVd0OgXIRq-uhQkJL8",
    authDomain: "kwitter-fec99.firebaseapp.com",
    databaseURL: "https://kwitter-fec99.firebaseio.com",
    projectId: "kwitter-fec99",
    storageBucket: "kwitter-fec99.appspot.com",
    messagingSenderId: "1030517190069",
    appId: "1:1030517190069:web:1c0b8bda5606442b3ffdfc",
    measurementId: "G-NWWNKTYV1F"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      username = document.getElementById("user_name").value;
      firebase.database().ref("/").child(username).update({
          purpose : "adding user"
      });
  }

  