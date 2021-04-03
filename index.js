var express=require('express')

var expressHDS=require('express-handlebars')
var path = require("path");
var app= express()

app.use(express.static(path.join(__dirname, 'assets')));
app.engine('handlebars',expressHDS({
    layoutsDir: __dirname +'/views/layouts',
    defaultLayout:'main'
}))
app.set('view engine','handlebars')


app.get('/',function (request,reqonse){

    reqonse.render('home');
})
app.post('/login',function (request,response){

})
app.listen(process.env.PORT || '3000')
