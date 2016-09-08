"use strict";

let $ = require("jquery"),
    classes = require("./robotClasses"),
    dom = require("./interactions");

let player = {},
    enemy = {};

function randomHealth(min, max) {
    min = 60;
    max = 150;
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomDamage(min, max) {
    min = 10;
    max = 30;
    return Math.floor(Math.random() * (max - min)) + min;
}

player = new classes.Robot();
enemy = new classes.Robot();

module.exports = {randomHealth, randomDamage};