'use strict';

var utils = require('../utils/writer.js');
var Courses = require('../service/CoursesService');

module.exports.findPetsByStatus = function findPetsByStatus (req, res, next) {
  var id = req.swagger.params['id'].value;
  Courses.findPetsByStatus(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
