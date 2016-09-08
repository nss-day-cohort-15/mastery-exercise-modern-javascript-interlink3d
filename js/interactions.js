"use strict";

let $ = require("jquery"),
    classes = require("./robotClasses"),
    selection = require("./robotSelection");

let playerName1 = "",
    playerRobot1 = null,
    playerName2 = "",
    playerRobot2 = null;

// name and type selected bot 1
  $(".submit1").click(function(e) {

  playerName1 = $("#player1input").val();
  $('.player1display').html(playerName1);
  console.log(playerName1);
  playerRobot1 = $("#playerRobot1").val();
  console.log(playerRobot1);
  });

// name and type selected bot 2
  $(".submit2").click(function(e) {

  playerName2 = $("#player2input").val();
  $('.player2display').html(playerName2);
  console.log(playerName2);
  playerRobot2 = $("#playerRobot2").val();
  console.log(playerRobot2);
  });
