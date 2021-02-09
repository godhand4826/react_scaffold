const fs = require('fs')
const path = require('path')
const Koa = require('koa')
const conditional = require('koa-conditional-get')
const etag = require('koa-etag')
const helmet = require('koa-helmet')
const static_= require('koa-static')
const compress = require('koa-compress')

const app = new Koa()
app.use(conditional())
app.use(etag())
app.use(helmet())
app.use(compress())
app.use(static_(path.join(__dirname, 'dist'), { maxage: 0 }))
app.use(async ctx=>{
	ctx.type = 'text/html'
	ctx.body = fs.createReadStream('./dist/index.html')
})

app.listen(8080, '0.0.0.0', () => {
	console.log(`listening ${8080}`)
})