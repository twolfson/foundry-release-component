var fs = require('fs');
var shell = require('shelljs');

exports.specVersion = '1.1.0';

exports.updateFiles = function (params, cb) {
  if (shell.test('-f', 'component.json')) {
    var componentJson = fs.readFileSync('component.json', 'utf8');
    var component = JSON.parse(componentJson);
    component.version = params.version;
    var output = JSON.stringify(component, null, 2);
    fs.writeFile('component.json', output, 'utf8', cb);
  } else {
    process.nextTick(cb);
  }
};
