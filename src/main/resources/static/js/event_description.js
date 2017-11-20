var cs480App = angular.module('LunacyScheduler', ['ui.bootstrap', 'firebase']);

var config = {
	    apiKey: "AIzaSyC28G2x-Xnel2wtmKnw3xi-a8TmWrnJ7tI",
	    authDomain: "lunacy-scheduler.firebaseapp.com",
	    databaseURL: "https://lunacy-scheduler.firebaseio.com",
	    projectId: "lunacy-scheduler"
	  };
firebase.initializeApp(config);
var database = firebase.database();

cs480App.controller('eventDescription', function ($scope, $firebaseArray,$firebaseObject, $log) {

  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split('&');

  var id = GetURLParameter('id');
  var eventID = id.replace(/['"]+/g, '');
  console.log("First: " + eventID);

  function GetURLParameter(sParam){
    for (var i = 0; i < sURLVariables.length; i++){
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return unescape(sParameterName[1]);
        }
    }
  }

  var reference = database.ref("Calendar/" + eventID);
  var event = $firebaseObject(reference);

  event.$loaded()
      .then(function(){
          $scope.description = event.description;
          $scope.start = event.start;
          $scope.end = event.end;
          $scope.title = event.title;
          $scope.users = event.users;
      });

});
