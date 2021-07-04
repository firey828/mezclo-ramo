function lemmedropitlikeitshot(ev) {
  ev.preventDefault();
}

function dragonrawr(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function dropitlikeitshot(ev) {
  ev.preventDefault();
  var stuffwegonget = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(stuffwegonget));
}

function trut() {
  var hectagon = document.getElementById("owonohectera");
  if (hectagon.innerHTML != " mind  strength  words  body ") {
    hectagon.innerHTML = "<a href=\"/hairpods.html\">click me</a>";
  }
}