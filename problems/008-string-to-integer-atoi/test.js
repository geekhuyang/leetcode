require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line.length === 0) return;
  var result = require('./index')(line);
  console.log(result);
});
