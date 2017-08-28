// Initialize Firebase
var config = {
    apiKey: "AIzaSyDxtz5-KtrdHtZNmiN-v0RZaH1LFGB0HEY",
    authDomain: "my-awesome-project-729fc.firebaseapp.com",
    databaseURL: "https://my-awesome-project-729fc.firebaseio.com",
    projectId: "my-awesome-project-729fc",
    storageBucket: "my-awesome-project-729fc.appspot.com",
    messagingSenderId: "981570038123"
  };

  firebase.initializeApp(config);

  var database = firebase.database();


  var initialLoad = true;

