"use strict";

// let markWeight = 78;
// let markHeight = 1.69;
var markWeight = 95;
var markHeight = 1.88;

// let johnWeight = 92;
// let johnHeight = 1.95;
var johnWeight = 85;
var johnHeight = 1.76;

// let markBMI = markWeight / markHeight ** 2;
// let johnBMI = johnWeight / johnHeight ** 2;

var markBMI = markWeight / (markHeight * markHeight);
var johnBMI = johnWeight / (johnHeight * johnHeight);
var markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
