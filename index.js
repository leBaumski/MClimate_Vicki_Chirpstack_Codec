//
//  mCloud Systems GmbH
//
// Functions to decode frmo MCLimate Vicki
// Caller file for development purposes
//
//
//
// Version 0.1
// Last Change: 22-11-10
//
//author = Andreas Baumgartner
const iiot_parser = require('./codec_vicki.js');


//Example Payloads for testing; uncomment only one for testing!
var payload = "811151ff00e001f000"
//var payload = "8115978a202022f000"
//var payload = "8115908c202022f000"

//Convert Hex to Byte array VERSION 2
var bytes = [];
var input = new Object();

while ( payload.length >= 2 )
{
  bytes.push(parseInt(payload.substring(0, 2), 16));
  payload = payload.substring(2, payload.length);
}

input.fport = 1;
input.bytes = bytes;
input.variables = {};

console.log(bytes);

const report = iiot_parser( input );
console.log(JSON.stringify(report, null, 4));
