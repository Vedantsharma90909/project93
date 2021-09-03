
//ADD YOUR FIREBASE LINKS HERE
  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyCD5v8Jfwo02GI8Mgf8zs92tv66g_FBluc",
      authDomain: "vedantkwitter-4e6ba.firebaseapp.com",
      databaseURL: "https://vedantkwitter-4e6ba-default-rtdb.firebaseio.com",
      projectId: "vedantkwitter-4e6ba",
      storageBucket: "vedantkwitter-4e6ba.appspot.com",
      messagingSenderId: "1050276725030",
      appId: "1:1050276725030:web:84c2675a3a8ac36c1041e7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);    username=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+ username + "!";
    function addRoom(){
   roomname=document.getElementById("room_name").value;
   localStorage.setItem("room_name",roomname);
   firebase.database().ref("/").child(roomname).update({
         purpose:"adding room name"
   });
   window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;      
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}