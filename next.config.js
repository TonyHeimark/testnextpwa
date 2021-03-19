const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  pwa: {
    dest: '.next',
    runtimeCaching
  }
});

module.exports = {
  target: 'serverless'
};
