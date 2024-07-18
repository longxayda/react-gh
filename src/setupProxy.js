const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/products',
    createProxyMiddleware({
      target: 'http://171.244.188.157:443',
      changeOrigin: true,
    })
  );
};
