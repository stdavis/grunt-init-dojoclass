exports.description = "Create all files associated with a new dojo class (.js, spec.js)";
exports.notes = "";

exports.template = function(grunt, init, done) {
  var _ = grunt.utils._;

  _.extend(grunt.helper("prompt_for_obj"), {
    name: {
      message: "ClassName"
    },
    path: {
      message: "Path/To/ClassFolder (relative to current folder)"
    },
    testspath: {
      message: 'tests folder'
    }
  });

  grunt.helper("prompt", {}, [
    grunt.helper("prompt_for", "name"),
    grunt.helper("prompt_for", "path", "app"),
    grunt.helper('prompt_for', 'testspath', 'app/tests')
  ], function (err, props) {
    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process). files.
    init.copyAndProcess(files, props, {});

    done();
  });
};
