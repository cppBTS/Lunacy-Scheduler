var cs480App = angular.module('LunacyScheduler', ['ui.bootstrap', "firebase"]);

var config = {
	    apiKey: "AIzaSyC28G2x-Xnel2wtmKnw3xi-a8TmWrnJ7tI",
	    authDomain: "lunacy-scheduler.firebaseapp.com",
	    databaseURL: "https://lunacy-scheduler.firebaseio.com",
	    projectId: "lunacy-scheduler"
	  };
firebase.initializeApp(config);
var database = firebase.database();

cs480App.controller('ReadDataCtrl', function ($scope, $firebaseObject,$firebaseArray) {
	var userRef = database.ref("user");
	$scope.users = new $firebaseArray(userRef);
	
});

cs480App.controller('DatepickerPopupDemoCtrl', function ($scope, $log) {
  
  $scope.submit = function() {
	  database.ref('user/' + $scope.name).set({
		  	user: $scope.name,
		  	group: $scope.group,
		    start: $scope.dt.getMonth() + 1 + "/" + $scope.dt.getDate() + "/" + $scope.dt.getFullYear(),
		    end: $scope.dt.end.getMonth() + 1 +  "/" + $scope.dt.end.getDate() + "/" + $scope.dt.end.getFullYear()
		  });
	        alert("Successfully Added");
  };
  
  //DatePicker
  $scope.today = function() {
	    $scope.dt = new Date();
	    $scope.dt.end = new Date();

  };
  $scope.today();

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
  
  //TimePicker
//  var d = new Date();
//  d.setHours(0);
//  d.setMinutes(0);
//  $scope.start_sunday = d;
//  $scope.start_monday = d;
//  $scope.start_tuesday = d;
//  $scope.start_wednesday = d;
//  $scope.start_thursday = d;
//  $scope.start_friday = d;
//  $scope.start_saturday= d;
//  
//  $scope.end_sunday = d;
//  $scope.end_monday = d;
//  $scope.end_tuesday = d;
//  $scope.end_wednesday = d;
//  $scope.end_thursday = d;
//  $scope.end_friday = d;
//  $scope.end_saturday= d;

  $scope.hstep = 1;
  $scope.mstep = 1;
  
  $scope.ismeridian = true;
  
  $scope.toggleMode = function() {
    $scope.ismeridian = ! $scope.ismeridian;
  };


  $scope.startSunday = function () {
    $log.log('Time changed to: ' + $scope.start_sunday);
  };
  $scope.startMonday = function () {
	$log.log('Time changed to: ' + $scope.start_monday);
  };
  $scope.startTuesday = function () {
	$log.log('Time changed to: ' + $scope.start_tuesday);
  };
  $scope.startWednesday = function () {
    $log.log('Time changed to: ' + $scope.start_wednesday);
  };
  $scope.startThursday = function () {
    $log.log('Time changed to: ' + $scope.start_thursday);
  };	
  $scope.startFriday = function () {
	$log.log('Time changed to: ' + $scope.start_friday);	
  };
  $scope.startSaturday = function () {
	$log.log('Time changed to: ' + $scope.start_saturday);
  };
  $scope.endSunday = function () {
	$log.log('Time changed to: ' + $scope.end_sunday);
  };
  $scope.endMonday = function () {
	$log.log('Time changed to: ' + $scope.end_monday);
  };
  $scope.endTuesday = function () {
	$log.log('Time changed to: ' + $scope.end_tuesday);
  };
  $scope.endWednesday = function () {
	$log.log('Time changed to: ' + $scope.end_wednesday);
  };
  $scope.endThursday = function () {
	$log.log('Time changed to: ' + $scope.end_thursday);
  };	
  $scope.endFriday = function () {
	$log.log('Time changed to: ' + $scope.end_friday);	
  };
  $scope.endSaturday = function () {
    $log.log('Time changed to: ' + $scope.end_saturday);
};
			  
			  
  

  $scope.clear = function() {
    $scope.mytime = null;
  };

});