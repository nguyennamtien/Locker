module.exports = function(dir) {
    process.chdir(dir);
    var path = require('path');
    var fs = require('fs');
    
    var me = JSON.parse(fs.readFileSync('me.json'));
    
    me.provides = ["device/fitbit"];
    
    fs.writeFileSync('me.json', JSON.stringify(me, null, 4));
    
    return true;
};