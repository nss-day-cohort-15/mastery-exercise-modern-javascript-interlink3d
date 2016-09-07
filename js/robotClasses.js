"use strict";

let $ = require("jquery");

  function Robot () {
    this.name = "";
    this.health = 0;
    this.damage = 0;
    console.log("robot object", Robot);
  }

  function randomHealth(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
  }

  function randomDamage(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
  }


  // 3 classes for Robot - Drone, Frankenstein, Tank



  // 2 subclasses for each:
      // Drone: fighter and sharpshooter
      // Frankenstein: armed and wrestler
      // Tank: ground and amphibious




module.exports = (Robot, randomHealth, randomDamage);