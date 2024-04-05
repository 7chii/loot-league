const express = require('express');
const app = express();
const path = require('path');
const port = 8080;

//usar folder de paginas estaticas
app.use('/static', express.static('static'));

//pedido index(pagina html espolios)
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'static/index.html'));
});

//pedido stylesheet(CSS)
app.get('/loot-league/static/styles.css',(req, res)=>{
    res.set('content-type', 'text/css');
    res.sendFile(path.join(__dirname, 'static/styles.css'));
});
//pedido imagem bau
app.get('/loot-league/static/imageAs/hextec.png',(req, res)=>
{
    res.set('content-type', 'image/png');
    res.sendFile(path.join(__dirname, 'static/imageAs/hextec.png'));
})

//listen da porta 8080
app.listen(port, ()=>{
    console.log(`api listening on port ${port}`);
});