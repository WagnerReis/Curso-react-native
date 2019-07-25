const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

function meuJson() {
    return (req, res, next) => {
        console.log('Antes de tudo: Meu middlewere...')
        next()
    }
}

app.get('/blabla/:valor', (req, res, next) => {
    console.log('Func 0')
    next()
})

app.get('/blabla/:valor', (req, res, next) => {
    console.log('Func 1')
    res.status(200).send('Meu Backend = ' + req.body.valor)
    next()
})

app.get('/blabla/:valor', (req, res) => {
    console.log('Func 2')
})

app.listen(3000, () => {
    console.log('Backend executando...')
}) 