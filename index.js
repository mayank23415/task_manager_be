import express from "express";
import router from "./v1/route.js";

const app = express()


app.use('/app/v1', router)

app.listen(3000, () => {
    console.log("listening on port no. :", 3000)
})