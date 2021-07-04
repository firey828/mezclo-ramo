function addtehlazzz() {
  var finditurtle = document.getElementById("taker");
  var reetocheetoyellowgreengrass = 0;
  if (finditurtle.classList.contains("giraffelionturtlething") == true) {
    finditurtle.classList.remove("giraffelionturtlething");  
    reetocheetoyellowgreengrass = reetocheetoyellowgreengrass + 1;
  } else if (finditurtle.classList.contains("giraffelionturtlething") == false) {
    finditurtle.classList.add("giraffelionturtlething");
    reetocheetoyellowgreengrass = reetocheetoyellowgreengrass + 1;
  }
  
  if (reetocheetoyellowgreengrass == 10) {
    finditurtle.classList.add("reefcoralle");
  }
}