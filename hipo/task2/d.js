/*
  Buggy Code :
  (function() {
  try {
    var textChangeHandler = function(event) {
      if (event.target.value === "wrong") {
        throw new Error("Wrong text entered");//this must be handled inside this function
      }
    }

    var textField = document.querySelector("#hipo-text-field");

 textField.addEventListener("input", textChangeHandler);
  } catch (e) {
    console.log("Error handled");
    console.log(e.message);
  }
})();
*/
/*
    In this code we can't catch 'Wrong text entered' error because catching fire only once before the handler function fires .
  We must try to catch this error inside function.
*/
(function() {
    var textChangeHandler = function(event) {
      try{
        if (event.target.value === "wrong") {
          throw new Error("Wrong text entered");
        }
      }
      catch (e) {
        console.log("Error handled");
        console.log(e.message);
      }
    }
    var textField = document.querySelector("#hipo-text-field");
    textField.addEventListener("input", textChangeHandler);
})();
