(function() {

var GGC_IP = '173.194.201.85|173.194.200.122|173.194.207.199';
var RESOURCE_DIR = '../resource/';


var fs = require('fs');
var child_process = require('child_process');




function doRunProxyProgram() {
  child_process.spawn(RESOURCE_DIR + 'goa-67b99f9/\u0067\u006f\u0061\u0067\u0065\u006e\u0074\u002e\u0065\u0078\u0065');
  child_process.spawn(RESOURCE_DIR + 'chrome42/chrome.exe', ['--user-data-dir=chromeuserdata', '--ignore-certificate-errors']);
}


function runProxyProgram() {
  fs.readFile(RESOURCE_DIR + 'goa-67b99f9-proxy-ini-template', function (err, data) {
    if (err) {
      alert('error readFile');
    } else {
      fs.writeFile(RESOURCE_DIR + 'goa-67b99f9/proxy.ini', String(data).replace(/{GGC_IP}/g, GGC_IP), function (err) {
        if (err) {
          alert('error writeFile');
        } else {
          doRunProxyProgram();
        }
      });
    } // if (err)
  });
}



runProxyProgram();


})();
