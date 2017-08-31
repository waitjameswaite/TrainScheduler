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

// Initial variables
var trainName = "";
var trainDestination = "";
var initialTime = 0;
var trainFrequency = 0;

// On Click function to capture submitted form, preventing default
$("#submit").on("click", function(event) {
  	event.preventDefault();

  	// Grab user values in form
  	trainName = $("#new-name").val().trim();
  	trainDestination = $("#new-destination").val().trim();
  	initialTime = $("#new-time").val().trim();
  	trainFrequency = $("#new-frequency").val().trim();

  	// Push as opbject into Firebase
  	database.ref().push({
  		trainName: trainName,
  		trainDestination: trainDestination,
  		initialTime: initialTime,
  		trainFrequency: trainFrequency,
  		dateAdded: firebase.database.ServerValue.TIMESTAMP
  	});

  	$("#new-name", "#new-destination", "#new-time", "#new-frequency").val("");

});

// Logs most recent Firebase push, running the time math, and appending data to table
database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {

  	var sv = snapshot.val();

  	console.log(sv.trainName, sv.trainDestination, sv.initialTime, sv.trainFrequency);

  	$("#table-body").append("<tr><td>" + sv.trainName + "</td><td>" + sv.trainDestination + "</td><td>" + sv.initialTime + "</td><td>" + sv.trainFrequency + "</td></tr>");

  }, function(errorObject) {
  	console.log("Errors handled: " + errorObject.code);
});