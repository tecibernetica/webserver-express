const express = require('express'); 
const app = express();
const hbs = require('hbs');
 
require('./hbs/helpers/helpers')

const port = process.env.PORT || 3000;


app.use(express.static( __dirname + '/public' ))

//Express HBS lo pone como motor para renderizar las plantillas
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');




app.get('/',  (req, res)=> {
    let salida = {
        nombre:'Fernando',
        edad:32,
        url:req.url
    }
  res.render('home',{
      nombre:'Fernando',
  });
})

app.get('/about',  (req, res)=> {
   res.render('about');
})
 


app.listen(port,()=>{
    console.log(`Escuchando peticiones en el puerto ${port}`)
})