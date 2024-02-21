const express = require('express');
const cors = require('cors');
const {getFirestore} = require("firebase-admin/firestore");
const admin = require("firebase-admin");
const serviceAccount = require(".\\exguilhermecantanhede-firebase-adminsdk-gyga6-9564cc73b4.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = getFirestore();
const mundial = db.collection('mundial22cantanhede')


const app = express()
const port = 3020

app.use(express.json());
app.use(cors())
app.listen(port, () => {
    console.log("Funcionant en el port " + port)
})

app.put("/guilhermecantanhede/estadi", async(req, res ) => {

    let estadi = req.body.estadi
    await mundial.doc("final22cantanhede").update({estadi})

})

app.get("/guilhermecantanhede/jugadors", async(req, res) => {
  let jugadors = {}
  let jugador = await mundial.doc("final22cantanhede").get()
  console.log(jugador)
  res.json(jugador)
})
