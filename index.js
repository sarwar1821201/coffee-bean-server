const express= require('express');
const app= express ();
require('dotenv').config()
const cors= require('cors');

const port= process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


// coffeeClub
// KrDVNB2N8MefYhhE

// console.log(process.env.DB_USER)
// console.log(process.env.DB_PASSWORD)

const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.w8gsdns.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri)



// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
   // await client.close();
  }
}
run().catch(console.dir);




app.get('/', (req,res)=>{
    res.send('coffee server is running')
} )

app.listen(port, ()=>{
    console.log(`coffee server is running on port: ${port} `)
} )