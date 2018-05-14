var express = require('express')
var path = require('path')
var app = express()
// var serveStatic = require('serve-static');
app.use(express.static(path.join(__dirname, '.vuepress/dist')))
// app.use(serveStatic(__dirname, {'index': ['index.html']}))
app.set('port', process.env.PORT || 5000)
// app.use(require('prerender-node').set('prerenderToken', 'uSrjN2GPemwhCFlLzVIz'));
app.get('*', function(req, res) {
    const index = path.join(__dirname, '.vuepress/dist', 'index.html')
    res.sendFile(index)
})
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'))
})
