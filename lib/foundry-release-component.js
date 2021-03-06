var fs = require('fs');
var shell = require('shelljs');

exports.updateFiles = function (params, cb) {
  var componentJson = fs.readFileSync('component.json', 'utf8');
  var component = JSON.parse(componentJson);
  component.version = params.version;
  var output = JSON.stringify(component, null, 2);
  fs.writeFile('component.json', output, 'utf8', cb);
};
