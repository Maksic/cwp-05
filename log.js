const fs = require('fs');

module.exports.log=function log(url, data) {
    const currentDate = new Date();

    if(JSON.stringify(data) != undefined)
    	body = JSON.stringify(data)
    else 
    	body = "Empty body"

    fs.appendFileSync("logfile.log", "Date: " + currentDate + "\n" + "Url: " + url + "\n" + "Body: " + body + "\n" + "=============================================================== \n" );
 }