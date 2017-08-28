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

  var newTableData = function(snapshot){
  	var trainName = snapshot.val().trainName;
  	var trainDestination = snapshot.val().trainDestination;
  	var initialTime = snapshot.val().initialTime;
  	var trainFrequency = snapshot.val().trainFrequency;

  	var today = moment();
  	var inputDate = moment(date, "DD/MM/YY");
  	var r = $("<tr>");
  	var dataValues = [trainName, trainDestination, initialTime, trainFrequency];
  	var freq = "";

  	for (var i = 0; i < 3; i++) {
  		var data = $("<td>");
  		data.html(dataValues[i]);
  		r.append(data);
  	}

  	$("#table-body").append(r);

  }

  $("submit").on("click", function(event) {

  	var trainName = $("#new-name").val().trim();
  	var trainDestination = $("#new-destination").val().trim();
  	var initialTime = $("#new-time").val().trim();
  	var trainFrequency = $("#new-frequency").val().trim();

  	database.ref().push({
  		trainName: trainName,
  		trainDestination: trainDestination,
  		initialTime: initialTime,
  		trainFrequency: trainFrequency,
  		dateAdded: firevase.database.ServerValue.TIMESTAMP
  	})

  })

  database.ref().on("child_added", function(snapshot) {
  	console.log(snapshot.val());
  	console.log("I'm making the table now!");
  	newTableData(snapshot);
  })