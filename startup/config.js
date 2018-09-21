const debug = require('debug')('app:startup');
const morgan = require('morgan');

module.exports = function (app) {
  if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    debug('Morgan enabled...');
  }
};