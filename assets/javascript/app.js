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

var trainName = "";
var trainDestination = "";
var initialTime = 0;
var trainFrequency = 0;


  $("submit").on("click", function(event) {
  	event.preventDefault();

  	trainName = $("#new-name").val().trim();
  	trainDestination = $("#new-destination").val().trim();
  	initialTime = $("#new-time").val().trim();
  	trainFrequency = $("#new-frequency").val().trim();

  	database.ref().push({
  		trainName: trainName,
  		trainDestination: trainDestination,
  		initialTime: initialTime,
  		trainFrequency: trainFrequency,
  		dateAdded: firevase.database.ServerValue.TIMESTAMP
  	});
  });

  database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {

  	var sv = snapshot.val();

  	console.log(sv.trainName);
  	console.log(sv.trainDestination);
  	console.log(sv.initialTime);
  	console.log(sv.trainFrequency);

  	// $("#").html(sv.trainName);
  	// $("#").html(sv.trainDestination);
  	// $("#").html(sv.initialTime);
  	// $("#").html(sv.trainFrequency);	

  }, function(errorObject) {
  	console.log("Errors handled: " + errorObject.code);
  });