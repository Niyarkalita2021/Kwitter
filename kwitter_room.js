var firebaseConfig = {
      apiKey: "AIzaSyCN5_eHw9R-IfThC7zPFfXbWg0dZCZvY7E",
      authDomain: "kwitter-269ad.firebaseapp.com",
      databaseURL: "https://kwitter-269ad-default-rtdb.firebaseio.com",
      projectId: "kwitter-269ad",
      storageBucket: "kwitter-269ad.appspot.com",
      messagingSenderId: "773161555743",
      appId: "1:773161555743:web:3d3646460706c2e266022a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
