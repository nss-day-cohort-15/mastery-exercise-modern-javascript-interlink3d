"use strict";

let $ = require("jquery"),
    classes = require("./robotClasses"),
    selection = require("./robotSelection");

let PlayerName1 = "",
    PlayerName2 = "";

// name bot 1
  $(".submit1").click(function(e) {

  PlayerName1 = $("#player1input").val();
  $('.player1display').html(PlayerName1);
  console.log(PlayerName1);
  // PlayerName1 = new classes.Robot();
  });

// name bot 2
  $(".submit2").click(function(e) {

  PlayerName2 = $("#player2input").val();
  $('.player2display').html(PlayerName2);
  console.log(PlayerName2);
  // PlayerName2 = new classes.Robot();
  });
