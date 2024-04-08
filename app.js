const express = require('express');
const app = express();
const path = require('path');
const port = 8080;
const sql = require('mysql');

//conexao BD
const db = sql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"lootleague"
});

//usar folder de paginas estaticas
app.use('/static', express.static('static'));
//aumentar limite de json recebido/mandado(para passar base64)
app.use(express.json({limit:'50mb'}));

//pedido index(pagina html espolios)
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'static/index.html'));
});

//pedido stylesheet(CSS)
app.get('/loot-league/static/styles.css',(req, res)=>{
    res.set('content-type', 'text/css');
    res.sendFile(path.join(__dirname, 'static/styles.css'));
});

//pedidos imagens nao-sql
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
//post request de info de ID campeao, recebendo string em buffer->b64->jpg e servindo pro front:
app.post('/img', (req, res)=>{
    const {id} = req.body;
    const {authorization} = req.headers;
            console.log(id);
            console.log(authorization);
       console.log(blob);
       const str = `SELECT splash FROM champ WHERE id='${id}';`;
    db.query(str, (err, result)=>{
        if (err) throw err;
        const dat = Buffer.from(result[0].splash);
        var string = dat.toString('base64');
        var partS = string.split('jpegbase64');
        res.send(`<img src="data:image/jpg;base64, ${partS[1]}" alt="" height="900">`);
        //console.log(partS[1]);
    })
});

//listen da porta 8080
app.listen(port, ()=>{
    console.log(`api listening on port ${port}`);
});