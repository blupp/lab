var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const dirs = getDirsInPath("public/projects")

  res.render('index', { projects: dirs });
});

module.exports = router;


function getDirsInPath(path) {
  const { readdirSync, statSync } = require('fs')
  const { join } = require('path')

  const dirs = p => readdirSync(p).filter(f => statSync(join(p, f)).isDirectory())

  return dirs(path)
}