
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

    user_name = localStorage.getItem("user_name");

    document.getElementById("welcome_text").innerHTML = "Welcome" + user_name + "!";

    function Add_room()
    {
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });

          localStorage.setItem("room_name" , room_name);

          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output_trending").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
       document.getElementById("output_trending").innerHTML += row;
      

      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}
 function logout() {
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
        window.location = "index.html";
 }