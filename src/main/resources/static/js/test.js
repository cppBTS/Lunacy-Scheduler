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
	  var moment = new Date($scope.dt);
	  var formatted = moment.getMonth() + "/" + moment.getDay() + "/" + moment.getFullYear();
	  var moment1 = new Date($scope.dt.end);
	  var formatted1 = moment1.getMonth() + "/" + moment1.getDay() + "/" + moment1.getFullYear();
	  firebase.database().ref('test/').set({
		    start: formatted,
		    end: formatted1
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