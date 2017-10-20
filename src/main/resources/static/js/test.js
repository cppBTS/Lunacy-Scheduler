var cs480App = angular.module('LunacyScheduler', ['ui.bootstrap']);

var config = {
	    apiKey: "AIzaSyC28G2x-Xnel2wtmKnw3xi-a8TmWrnJ7tI",
	    authDomain: "lunacy-scheduler.firebaseapp.com",
	    databaseURL: "https://lunacy-scheduler.firebaseio.com",
	    projectId: "lunacy-scheduler"
	  };
firebase.initializeApp(config);
var database = firebase.database();

cs480App.controller('DatepickerPopupDemoCtrl', function ($scope) {
  $scope.today = function() {
    $scope.dt = new Date();
    $scope.dt.end = new Date();

  };
  $scope.today();
  
  $scope.submit = function() {
	  firebase.database().ref('test/').set({
		  	user: $scope.name,
		  	group: $scope.group,
		    start: $scope.dt.getMonth() + 1 + "/" + $scope.dt.getDate() + "/" + $scope.dt.getFullYear(),
		    end: $scope.dt.end.getMonth() + 1 +  "/" + $scope.dt.end.getDate() + "/" + $scope.dt.end.getFullYear()
		  });
  };

  $scope.clear = function() {
    $scope.dt = null;
    $scope.dt.end = null;
  };


  $scope.dateOptions = {
    minDate: new Date(),
    showWeeks: false
  };
  
  $scope.dateOptions1 = {
	minDate: $scope.dt,
	showWeeks: false
  };
  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.open2 = function() {
	$scope.dateOptions1.minDate = $scope.dt;
    $scope.popup2.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };
  
  

});