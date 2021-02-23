import express, { response } from 'express';

const app = express();

app.get('/', (req, res, next)=> {
    return res.json({message:"Hello, World!"});
})

app.post('/', (req, res, next)=> {
    return res.json({message:"Testando POST!"});
})

app.listen(3333);