//Practice how to change CSS style
function clickFunction() {
  let x = document.getElementById("after-extension");

  if (x.style.display === "") {
    x.style.display = "flex";
    x.style.justifyContent = "space-between";
    document.getElementById("check-out").innerHTML = "show less";
  } else {
    x.style.display = "";
  }
}
//Practice how to change attributes
function checkAttribute() {
  let top1 = document.getElementsByTagName("details")[0].getAttribute("open");
  let b1 = document.getElementById("b1");
  // if (y === "false") {
  //   console.log("true");
  // } else {
  //   console.log("change");
  // }

  if (top1 === null) {
    b1.setAttribute("open", "open");
  } else {
    console.log("null");
    b1.removeAttribute("open");
  }
}

function checkAttribute2() {
  let top2 = document.getElementsByTagName("details")[1].getAttribute("open");
  let b2 = document.getElementById("b2");

  if (top2 === null) {
    b2.setAttribute("open", "open");
  } else {
    b2.removeAttribute("open");
  }
}

function checkAttribute3() {
  let top3 = document.getElementsByTagName("details")[2].getAttribute("open");
  let b3 = document.getElementById("b3");

  if (top3 === null) {
    b3.setAttribute("open", "open");
  } else {
    b3.removeAttribute("open");
  }
}

let lastpart = document.getElementById("share");
lastpart.addEventListener("click", function() {
  alert("Share others' profile,this guy is newbie");
});
