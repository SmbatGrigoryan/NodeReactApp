var localtunnel = require('localtunnel');
localtunnel(5000, { subdomain: 'smbatnodereactapp' }, function(err, tunnel) {
  console.log('LT running')
  console.log('tunnel', tunnel)
});
