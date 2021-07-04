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