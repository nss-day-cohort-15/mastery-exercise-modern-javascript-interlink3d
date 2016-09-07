"use strict";

let $ = require("jquery");

  function Robot () {
    this.name = "";
    this.health = 0;
    this.damage = 0;

    this.toString = function() {
      return this.name;
    };

    console.log("robot object", Robot);
  }

  // 3 classes for Robot - Drone, Frankenstein, Tank
  function Drone () {
    this.health = 20;
    this.damage = 30;
  }
  Drone.prototype = new Robot();

  function Frankenstein () {
    this.health = 30;
    this.damage = 20;
  }
  Frankenstein.prototype = new Robot();

  function Tank () {
    this.health = 40;
    this.damage = 10;
  }
  Tank.prototype = new Robot();

  // 2 subclasses for each:
      // Drone: fighter and sharpshooter
      // Frankenstein: armed and wrestler
      // Tank: ground and amphibious

  function fighter () {
    this.name = "fighter";
    this.health = +10;
    this.damage = +5;
  }
  fighter.prototype = new Drone();

  function sharpshooter () {
    this.name = "sharpshooter";
    this.health = +5;
    this.damage = +10;
  }
  sharpshooter.prototype = new Drone();

  function armed () {
    this.name = "armed";
    this.health = +5;
    this.damage = +15;
  }
  armed.prototype = new Frankenstein();

  function wrestler () {
    this.name = "wrestler";
    this.health = +10;
    this.damage = +10;
  }
  wrestler.prototype = new Frankenstein();

  function ground () {
    this.name = "ground";
    this.health = +5;
    this.damage = +10;
  }
  ground.prototype = new Tank();

  function amphibious () {
    this.name = "amphibious";
    this.health = +15;
    this.damage = +5;
  }
  amphibious.prototype = new Tank();

module.exports = (fighter, sharpshooter, armed, wrestler, ground, amphibious);