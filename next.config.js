const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = {
  target: 'serverless'
};

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching
  }
});
