module.exports = function(mergeobj) {
var util = require('util'),
  merge = require('merge'),
  EventEmitter = require('events').EventEmitter;
  var DoorBell = function() {
    EventEmitter.call(this);
  };
  util.inherits(DoorBell, EventEmitter);
  var db = new DoorBell();
  merge(db,mergeobj);
  return db;
}