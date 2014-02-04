// Load in dependencies
var fs = require('fs');
var expect = require('chai').expect;
var componentRelease = require('../');
var fixtureUtils = require('./utils/fixtures');

// Define our test
describe('Setting the version', function () {
  describe('in a component module', function () {
    var fixtureDir = fixtureUtils.fixtureDir('component');
    before(function release (done) {
      componentRelease.setVersion({
        version: '0.1.0',
        message: 'Release 0.1.0',
        description: null
      }, done);
    });

    it('updates the component.json', function () {
      var pkgJson = fs.readFileSync(fixtureDir + '/component.json');
      expect(JSON.parse(pkgJson)).to.have.property('version', '0.1.0');
    });
  });
});
