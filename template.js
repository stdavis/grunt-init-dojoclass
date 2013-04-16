'use strict';

exports.description = "Create all files associated with a new dojo class (.js, spec.js)";
exports.notes = "";

exports.template = function(grunt, init, done) {
  var fs = require('fs');
  var declareNameDefault = 'app/<ClassName>';

  init.process({}, [
    {
      name: 'name',
      message: 'ClassName'
    },
    {
      name: 'description',
      message: 'Widget Description'
    },
    {
      name: 'path',
      message: "Path/To/WidgetFolder (relative to current folder)",
      "default": 'app'
    },
    {
      name: 'declareName',
      message: "DojoDeclareName",
      "default": declareNameDefault
    },
    {
      name: 'testspath',
      message: 'tests folder',
      "default": 'app/tests'
    }
  ], function (err, props) {
    // warn if overright
    var path = 'src/' + props.path + '/' + props.name + '.js';
    if (fs.existsSync(path)) {
      grunt.warn('There is already a module located there!');
    }

    // apply declareName default
    if (props.declareName === declareNameDefault) {
      props.declareName = 'app/' + props.name;
    }
    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process). files.
    init.copyAndProcess(files, props, {});

    done();
  });
};
