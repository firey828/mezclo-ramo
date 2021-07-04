function rockabye() {
  var greelythechild = document.getElementById("butterflybaby");
  if (greelythechild.innerHTML == "read my lips") {
    greelythechild.innerHTML = "good. you appear to posess basic intellectual capabilities.";
  } else if (greelythechild.innerHTML == "good. you appear to posess basic intellectual capabilities.") {
    greelythechild.innerHTML = "hmm";
  } else if (greelythechild.innerHTML == "hmm") {
    greelythechild.innerHTML = "i see you are persistent";
  } else if (greelythechild.innerHTML == "i see you are persistent") {
    greelythechild.innerHTML = "no matter";
  } else if (greelythechild.innerHTML == "no matter") {
    greelythechild.innerHTML = "everyone gives <a href=\"/nearthend.html\">up</a> in the end";
    greelythechild.classList.add("floatyfloatboi");
  }
}