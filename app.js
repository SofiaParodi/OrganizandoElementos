const express = require ('express');
const app = express();
const port = 3030;
const path = require('path');
const views = path.join(__dirname,'views');
console.log(views);

app.get('/',(req,res)=>{
    res.sendFile(path.join(views,'home.html'))
});
app.get('/login',(req,res)=>{
    res.sendFile(path.join(views,'login.html'))
});
app.get('/register',(req,res)=>{
    res.sendFile(path.join(views,'register.html'))
});
app.get('/cart',(req,res)=>{
    res.sendFile(path.join(views,'cart.html'))
});
app.get('/ofertas',(req,res)=>{
    res.sendFile(path.join(views,'ofertas.html'))
})
app.get('/tiendas',(req,res)=>{
    res.sendFile(path.join(views,'tiendas.html'))
})
app.get('/vender',(req,res)=>{
    res.sendFile(path.join(views,'vender.html'))
})
app.get('/help',(req,res)=>{
    res.sendFile(path.join(views,'help.html'))
})
app.use(express.static('public'))

app.listen(port,()=>console.log(`Servidor corriendo en http://localhost:${port}` ))

