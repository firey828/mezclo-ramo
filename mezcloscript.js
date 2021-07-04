var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var ruleeight = this.nextElementSibling;
    if (ruleeight.style.maxHeight) {
      ruleeight.style.maxHeight = null;
    } else {
      ruleeight.style.maxHeight = ruleeight.scrollHeight + "px";
    } 
  });
}

function botherRuleEight() {
  var whoToBother = document.getElementById("theeighthrule");
  whoToBother.innerHTML = "rule eight: stop that, i'm on my lunch break!";
}

function dothatonethingtoeverything() {
  var whoToBother = document.getElementById("atall");
  whoToBother.innerHTML = "everything -- yeah, like that! :)";
}

function makeitabee() {
  var whoToBother = document.getElementById("beetobe");
  whoToBother.innerHTML = "🐝";
}

function oddevenyeah() {
  var whoToBother = document.getElementById("tomakeityeah");
  whoToBother.innerHTML = "even";
}