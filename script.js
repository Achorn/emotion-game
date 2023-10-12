var text = ["LOADING.  ", "LOADING.. ", "LOADING...", "LOADING"];
var counter = 0;
var loadingElem = document.getElementById("loadingDisplay");
var cryButton = document.getElementsByClassName("cryButton")[0];

var sadButton = document.getElementsByClassName("sadButton")[0];
var errorButtons = document.getElementsByClassName("error");
var inst = setInterval(change, 1000);
