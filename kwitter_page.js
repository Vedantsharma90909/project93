//YOUR FIREBASE LINKS
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
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);
      name = message_data['name'];
      message = message_data['message'];
      like = message_data['likes'];
      namewithtag = "<h4>"+name+"<img class='user_tick' src='tick.png'></h4>"; 
       messagewithtag = "<h4 class='message_h4'>"+message+"</h4>";
       likebutton = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>";
       spanwithtag = "<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";
       row = namewithtag+messagewithtag+likebutton+spanwithtag;
       document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
function send(){
msg = document.getElementById("msg").value;
console.log(msg);
firebase.database().ref(room_name).push(
      {
            name:user_name,
            message:msg,
            likes:0
      }
);
document.getElementById("msg").value="";
}


function update_like(message_id){
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updatelike = Number(likes) +1;
      firebase.database().ref(room_name).child(message_id).update({
            likes:updatelike
      });
}