var signUpMod = angular.module('SignUp', []);

var config = {
	    apiKey: "AIzaSyC28G2x-Xnel2wtmKnw3xi-a8TmWrnJ7tI",
	    authDomain: "lunacy-scheduler.firebaseapp.com",
	    databaseURL: "https://lunacy-scheduler.firebaseio.com",
	    projectId: "lunacy-scheduler"
	  };
firebase.initializeApp(config);
var database = firebase.database();

firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
	    // User is signed in.
	  } else {
	    // No user is signed in.
	  }
	});

signUpMod.controller('SignIn', function ($scope) {
	$scope.signin = function() {
		firebase.auth().signInWithEmailAndPassword($scope.signin.email, $scope.signin.password).catch(function(error) {
			  // Handle Errors here.
			  var errorCode = error.code;
			  var errorMessage = error.message;
			  if (errorCode === 'auth/wrong-password') {
		            alert('Wrong password.');
		          } else {
		            alert(errorMessage);
		          }
			  // ...
			});
		alert("Successfully logged in");
	}
});


signUpMod.controller('SignUpUser', function ($scope) {
	$scope.signup = function() {
		if($scope.first.password == $scope.confirm.password) {
			if($scope.first.password.length >= 6) {
			firebase.auth().createUserWithEmailAndPassword($scope.signup.email, $scope.confirm.password).catch(function(error) {
				  // Handle Errors here.
				  var errorCode = error.code;
				  var errorMessage = error.message;
				  if (errorCode == 'auth/weak-password') {
			          alert('The password is too weak.');
			        } else {
			          alert(errorMessage);
			        }
				  // ...
				});
			alert("Account successfully created");
			}
			else {
				alert("Password needs to be atleast 6 characters long");
			}
		} else {
			alert("Passwords do not match!");
		}
	}
});


signUpMod.controller('SignOutUser', function ($scope) {
	$scope.signout = function() {
        firebase.auth().signOut();
	}
});
