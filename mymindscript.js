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
  var reekga = document.getElementById(stuffwegonget);
  reekga.innerHTML = "<a href=\"/riddle.html\">click me!</a>";
}