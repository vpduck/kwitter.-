//YOUR FIREBASE LINKS
var firebaseConfig = {
      const firebaseConfig = {
            apiKey: "AIzaSyBEj6LlGd-H27Ql8a_qJdRrhqBvk_EKbOg",
            authDomain: "kwitter-45fcf.firebaseapp.com",
            databaseURL: "https://kwitter-45fcf-default-rtdb.firebaseio.com",
            projectId: "kwitter-45fcf",
            storageBucket: "kwitter-45fcf.appspot.com",
            messagingSenderId: "941616961715",
            appId: "1:941616961715:web:10375182fee736572e38c6",
            measurementId: "G-T742S031DR"
          };
          
          // Initialize Firebase
          const app = initializeApp(firebaseConfig);
          const analytics = getAnalytics(app);
    };
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  
  function send()
  {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name1:user_name,
          message:msg,
         like:0
      });
      document.getElementById("msg").value="";
  }
//End code
      } });  }); }
getData();
