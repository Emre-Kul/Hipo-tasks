/*
  title click eventListener function
*/
function tab_click(e){
  if(e.target.getAttribute("picked") != null)
    return;
  removeAtts();
  pickTab(e.target);
}
/*
  This function get title div as a parameter and use its 'data-bind' attribute to show content div.
*/
function pickTab(tDiv){
  var cDiv = document.getElementById(tDiv.getAttribute("data-bind"));
  tDiv.setAttribute("picked","");
  cDiv.setAttribute("picked","");
}

/*
  This function remove 'picked' attribute from all the 'content' and 'title' divs.
*/
function removeAtts(){
  var cDiv = document.querySelectorAll('.content');
  var tDiv = document.querySelectorAll('.title');
  for(var i = 0;i < tDiv.length;i++)
    tDiv[i].removeAttribute("picked");
  for(var i = 0;i < cDiv.length;i++)
    cDiv[i].removeAttribute("picked");
}

/*
  This function add eventListener (click) to all elements with class name is 'title'.
*/
function init(){
  var tDiv = document.querySelectorAll('.title');
  for(var i = 0;i < tDiv.length;i++)
    tDiv[i].addEventListener('click',tab_click);
  if(tDiv.length > 0)
    pickTab(tDiv[0]);//showing first tab content
}
document.addEventListener("DOMContentLoaded", function(event) {//content must be loaded before calling init function
  init();
});
