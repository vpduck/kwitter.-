// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name;

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End cod
      });});}
getData();

function redirectToRoomName(name)
{
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      window.location = "index.html";
      localStorage.removeItem("room_name");
}

function login()
      {
localStorage.addItem("user_name");
      }


