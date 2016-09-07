"use strict";

console.log("hello Edgar");

let $ = require("jquery"),
    classes = require("./robotClasses"),
    selection = require("./robotSelection"),
    dom = require("./interactions");


let Robot = {};
let PlayerName1 = {};
let PlayerName2 = {};

// name bot 1
$(".submit1").click(function(e) {

  Robot.name = $("#player1input").val();
  $('.player1display').html(Robot.name);
  //console.log(Robot.name);
  PlayerName1 = $("#player1input").val();
  PlayerName1 = new Robot(PlayerName1);
  //console.log(PlayerName1);
});

// name bot 2
$(".submit2").click(function(e) {

  Robot.name = $("#player2input").val();
  $('.player2display').html(Robot.name);
  //console.log(Robot.name);
  PlayerName2 = $("#player2input").val();
  PlayerName2 = new Robot(PlayerName2);
  //console.log(PlayerName2);
});



