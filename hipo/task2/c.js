/*
  Buggy Code :
	function User(userName) {
	  this.userName = userName;
	  this.sayHi = function() {
	    console.log(this.userName);
	  }
	}

	var user = new User("John");
	setTimeout(user.sayHi, 500);
*/
/*
	sayHi is a function and functions syntax is like function_name(parameters).
	In this example sayHi must be sayHi()
*/
function User(userName) {
	  this.userName = userName;
	  this.sayHi = function() {
	    console.log(this.userName);
	  }
	}

	var user = new User("John");
	setTimeout(user.sayHi(), 500);
