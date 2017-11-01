const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 3001));

app.use(express.static(__dirname));

app.listen(app.get('port'), function () {
  console.log('Process St listening on port', app.get('port'));
});

module.exports = app;
