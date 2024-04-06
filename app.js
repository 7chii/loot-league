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
//pedidos imagens
app.get('/loot-league/static/imageAs/hextec.png',(req, res)=>{
    res.set('content-type', 'image/png');
    res.sendFile(path.join(__dirname, 'static/imageAs/hextec.png'));
})
app.get('/loot-league/static/imageAs/allin.png',(req, res)=>{
    res.set('content-type', 'image/css');
    res.sendFile(path.join(__dirname, 'static/imageAs/allin.png'));
})
app.get('/loot-league/static/imageAs/bauIndl.png',(req, res)=>{
    res.set('content-type', 'image/png');
    res.sendFile(path.join(__dirname, 'static/imageAs/hexin.png'));
})
app.get('/loot-league/static/imageAs/campin.png', (req, res)=>{
    res.set('content-type', 'image/png');
    res.sendFile(path.join(__dirname, 'static/imageAs/campin.png'));
})
app.get('/loot-league/static/imageAs/skinsin.png', (req, res)=>{
    res.set('content-type', 'image/png');
    res.sendFile(path.join(__dirname, 'static/imageAs/skinsin.png'));
})

//listen da porta 8080
app.listen(port, ()=>{
    console.log(`api listening on port ${port}`);
});