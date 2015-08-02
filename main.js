(function() {

var GGC_IP = '216.58.221.254|64.233.189.17|208.117.224.221';
var RESOURCE_DIR = '../resource/';


var fs = require('fs');
var child_process = require('child_process');
var path = require('path');

function getBaseDir() {
  
}

function runProxyProgram2() {
  child_process.spawn(path.resolve('../nodejs/node.exe'), [path.resolve('../resource/shadowsocks-nodejs/bin/sslocal')]);
}

function runBrowserProgam() {
  child_process.spawn(RESOURCE_DIR + 'chrome42/chrome.exe', ['--user-data-dir=chromeuserdata', '--ignore-certificate-errors']);
}

function doRunProxyProgram() {
  child_process.spawn(path.resolve('../resource/goa-67b99f9/python27.exe'), [path.resolve('../resource/goa-67b99f9/proxy.py')]);
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
runProxyProgram2();
runBrowserProgam();


})();
