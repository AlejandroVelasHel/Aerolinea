const express = require('express');
const app = express();
const puerto = 8083;
app.use(express.static('public'));
const path = require('path');
const hbs = require('hbs');

app.set('views', path.join(__dirname+ '/public/views'))
app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/public/views/partials')

app.get('/',(req,res) => {
    res.render('disponibilidad',{titulo: 'Aerolinea Alejandro'});

 });
  app.listen(puerto,() => {
     console.log(`escuchando el puerto ${puerto}`)
 });