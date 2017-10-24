'use strict';

const app = require('./app');

app.listen(app.get('port'), function() {
    console.log('Poxy Proxy server listening on port ' + app.get('port'));
});
