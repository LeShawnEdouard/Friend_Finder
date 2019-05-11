// Dependencies
var express = require("express");
var path = require("path");

// Set our port to 8080
var PORT = 8080;

// Create our server
var app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());