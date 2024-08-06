import express from "express";

const app = express()

app.get('/test', (req, res) => {
    res.send('hello world')
})

app.listen(3000, () => {
    console.log("listening on port no. :", 3000)
})