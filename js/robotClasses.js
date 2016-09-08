"use strict";

let $ = require("jquery"),
    selection = require("./robotSelection");

  function Robot () {
    this.name = "";
    this.style = null;
    this.type = null;
    this.health = 50;
    this.damage = 50;
    // console.log("robot object", Robot);
  }

  // 3 styles for Robot - Drone, Frankenstein, Tank
  function Drone () {
    this.style = "Drone";
  }
  Drone.prototype = new Robot();

  function Frankenstein () {
    this.style = "Frankenstein";
  }
  Frankenstein.prototype = new Robot();

  function Tank () {
    this.style = "Tank";
  }
  Tank.prototype = new Robot();

  // 2 subclasses for each:
      // Drone: fighter and sharpshooter
      // Frankenstein: armed and wrestler
      // Tank: ground and amphibious

  function fighter () {
    this.type = "fighter";
    this.health = selection.randomHealth();
    this.damage = selection.randomDamage();
  }
  fighter.prototype = new Drone();

  function sharpshooter () {
    this.type = "sharpshooter";
    this.health = selection.randomHealth();
    this.damage = selection.randomDamage();
  }
  sharpshooter.prototype = new Drone();

  function armed () {
    this.type = "armed";
    this.health = selection.randomHealth();
    this.damage = selection.randomDamage();
  }
  armed.prototype = new Frankenstein();

  function wrestler () {
    this.type = "wrestler";
    this.health = selection.randomHealth();
    this.damage = selection.randomDamage();
  }
  wrestler.prototype = new Frankenstein();

  function ground () {
    this.type = "ground";
    this.health = selection.randomHealth();
    this.damage = selection.randomDamage();
  }
  ground.prototype = new Tank();

  function amphibious () {
    this.type = "amphibious";
    this.health = selection.randomHealth();
    this.damage = selection.randomDamage();
  }
  amphibious.prototype = new Tank();

module.exports = {Robot, Drone, Frankenstein, Tank, fighter, sharpshooter, armed, wrestler, ground, amphibious};