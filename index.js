$("#tog").click(function() {
  $("#education").toggle();
});

$("#tog2").click(function() {
  $("#experiance").toggle();
});

$("#tog3").click(function() {
  $("#skills").toggle();
});

$("#achiev").click(function() {
  $("#achievments").toggle();
});

document.querySelector("#education").classList.add("hide-block");
document.querySelector("#experiance").classList.add("hide-block");
document.querySelector("#skills").classList.add("hide-block");
document.querySelector("#achievments").classList.add("hide-block");

$("#education").click(function() {
  $("#education").toggle();
});

$("#experiance").click(function() {
  $("#experiance").toggle();
});

$("#skills").click(function() {
  $("#skills").toggle();
});

$("#achievments").click(function() {
  $("#achievments").toggle();
});

document.querySelector("#edu").onmouseover = function () {
    document.querySelector("#edu").classList.add("bold-italic");
};
document.querySelector("#edu").onmouseout = function () {
    document.querySelector("#edu").classList.remove("bold-italic");
};


document.querySelector("#exp").onmouseover = function () {
    document.querySelector("#exp").classList.add("bold-italic");
};
document.querySelector("#exp").onmouseout = function () {
    document.querySelector("#exp").classList.remove("bold-italic");
};

document.querySelector("#ski").onmouseover = function () {
    document.querySelector("#ski").classList.add("bold-italic");
};
document.querySelector("#ski").onmouseout = function () {
    document.querySelector("#ski").classList.remove("bold-italic");
};

document.querySelector("#ach").onmouseover = function () {
    document.querySelector("#ach").classList.add("bold-italic");
};
document.querySelector("#ach").onmouseout = function () {
    document.querySelector("#ach").classList.remove("bold-italic");
};
