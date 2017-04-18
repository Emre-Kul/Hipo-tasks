/*
  Buggy Code :
  (function() {
  var buttonCount = 4;

  for(var index=0; index<buttonCount; index++){
    button = document.createElement("button");
    button.textContent = "button "+ (index + 1);
    button.addEventListener("click",  function(){
      alert(index + 1);//this fire after for loop finish because of that this function alert always last value of index
    });
    document.body.appendChild(button);
}
})();
*/


/*
  Last Solution
  I use function in this solution.Function get current index as a parameter and this causing
  copy the current index and create new index inside the function.Eventlistener use this newly created variable.
*/
(function() {
  var buttonCount = 4;
  var index;
  for(index = 0; index < buttonCount; index++){
    (function(index){
      var button = document.createElement("button");
      button.textContent = "button "+ (index + 1);
      button.addEventListener("click",function(){
        alert(index+1);
      });
      document.body.appendChild(button);
    })(index);
  }
})();

/*
  My First Solution:
  I did this first but i feel that is not a right approach.After some research i came up with a better solution(above).
*/
(function() {
  var buttonCount = 4;

  for(var index=0; index<buttonCount; index++){
    button = document.createElement("button");
    button.textContent = "button "+ (index + 1);
    button.addEventListener("click",  function(e){
     alert(parseInt(e.target.textContent.split(' ')[1]));
    });

    document.body.appendChild(button);
  }
})();
