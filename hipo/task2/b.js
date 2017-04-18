/*
  Buggy Code :

  (function(){
  var age = 10;
  setTimeout(function(){
    console.log(age);//this is using global age variable(output 10)
    var age = ++age;//'var age' create new variable (undefined).From now on age is undefined and ++age try to increment undefined age variable.
    console.log(age);//this output undefined(local age)
  }, 0);
  console.log(age++);//var age = ++age doesn't effect here(it's created and destroyed inside above function)
                       and this output 11 in this code
})();

*/
/*
  Problem in this code is defining age variable again.(var age = ++age).
*/
(function(){
  var age = 10;
  setTimeout(function(){
    console.log(age);
    age = ++age;
    //age++;//this is better implementation.
    console.log(age);
  }, 0);
  console.log(age++);
})();
