var fs = require('fs-extra');

// copy ui5lab browser to the right location for local testing
fs.copySync('./node_modules/ui5lab-browser/dist/', './test/ui5lab/browser');

// read library namespace from package.json
var oPackage = require('./package.json');
var sNamespace = oPackage.ui5lab.namespace || "ui5lab.library";

// add library namespace to browser library list
var sBrowserLibraryFile = './test/ui5lab/browser/libraries.json';
fs.readFile(sBrowserLibraryFile, 'utf8', function (err, data) {
	if (err) {
		return console.log(err);
	}
	var result = data.replace(/\[((\r)?\n\t)*\]/m, '[\r\n\t\t"' + sNamespace + '"\r\n\t]');
	fs.writeFile(sBrowserLibraryFile, result, 'utf8', function (err) {
		if (err) return console.log(err);
	});
});