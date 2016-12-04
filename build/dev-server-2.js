require('./check-versions')()
var config = require('../config')
if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var opn = require('opn')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()


// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))



const fs = require('fs');
const vueServerRenderer = require('vue-server-renderer');
// Server-Side Bundle File
const serverBundleFilePath = path.join(__dirname, '../dist/bundle.server.js')
const serverBundleFileCode = fs.readFileSync(serverBundleFilePath, 'utf8');
const bundleRenderer = vueServerRenderer.createBundleRenderer(serverBundleFileCode);

// Client-Side Bundle File
const clientBundleFilePath = path.join(__dirname, '../dist/bundle.client.js');
const clientBundleFileUrl = '/bundle.client.js';

// Server-Side Rendering
app.get('/', function (req, res) {
  bundleRenderer.renderToString((err, html) => {
    console.log(html)
    if (err){
      res.status(500).send(`
        <h1>Error: ${err.message}</h1>
        <pre>${err.stack}</pre>
      `);
    } else {
      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Vue 2.0 SSR</title>
          </head>
          <body>
            ${html}
            <script src="${clientBundleFileUrl}"></script>
          </body>
        </html>`);
    }
    console.log('aaa')
  });
});

// Client-Side Bundle File
app.get(clientBundleFileUrl, function (req, res) {
  console.log('aaa')
  const clientBundleFileCode = fs.readFileSync(clientBundleFilePath, 'utf8');
  res.send(clientBundleFileCode);
});

app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://localhost:' + port
  console.log('Listening at ' + uri + '\n')

  // when env is testing, don't need open it
  if (process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
})
