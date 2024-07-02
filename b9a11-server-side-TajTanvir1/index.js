const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({
   origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://explore-alternate.web.app",
      "explore-alternate.firebaseapp.com",
    ],
    credentials: true,
}));
app.use(express.json());



const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.g5peoxj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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
   //  await client.connect();

const queriesCollection = client.db('exploreAlternate').collection('allQueries')
const recommendCollection = client.db('exploreAlternate').collection('recommendation')

// Get Queries
app.get('/queries', async (req,res)=>{
   const cursor = queriesCollection.find();
   const result = await cursor.toArray();
   res.send(result);
})

// Get All Queries
app.get('/query', async (req,res)=>{
   const search = req.query.search
   let query = {
      productName: { $regex: `${search}`, $options: 'i' },
    }
   const cursor = queriesCollection.find(query).sort({dateTime: -1});
   const result = await cursor.toArray();
   res.send(result);
})

// Get All Recommends
app.get('/recommend', async (req,res)=>{
   const cursor = recommendCollection.find();
   const result = await cursor.toArray();
   res.send(result);
})

// Get User Queries
app.get('/myQueries/:email', async (req, res) => {
   // console.log(req.params.email)
   const result = await queriesCollection.find({ queryUserEmail: req.params.email}).toArray();
   res.send(result);
})

// Get User Recommends
app.get('/recommends/:email', async (req, res) => {
   // console.log(req.params.email)
   const result = await recommendCollection.find({ recommendEmail: req.params.email}).toArray();
   res.send(result);
})

// Get Queries Recommend
app.get('/recommend/:queryId', async (req, res) => {
   // console.log(req.params.queryId)
   const result = await recommendCollection.find({ queryId: req.params.queryId}).toArray();
   res.send(result);
})

// Get Recommendations for User
app.get('/recommendations/:queryUserEmail', async (req, res) => {
   // console.log(req.params.queryUserEmail)
   const result = await recommendCollection.find({ queryUserEmail: req.params.queryUserEmail}).toArray();
   res.send(result);
})


// Details of specific Query
app.get('/queries/:id', async (req,res) =>{
   const id = req.params.id;
   const query =  {_id: new ObjectId(id)}
   const result = await queriesCollection.findOne(query);
   res.send(result);
})

// Query Add
app.post('/queries', async (req, res) => {
   const queryDetails = req.body;
   // console.log(queryDetails);
   const result = await queriesCollection.insertOne(queryDetails);
   res.send(result);
})

// Recommendation Add
app.post('/recommend', async (req, res) => {
   const recommendDetails = req.body;
   // console.log(recommendDetails);
   const result = await recommendCollection.insertOne(recommendDetails);
   res.send(result);
})

// Delete specific Query
app.delete('/queries/:id', async (req,res) =>{
   const id = req.params.id;
   const query =  {_id: new ObjectId(id)}
   const result = await queriesCollection.deleteOne(query);
   res.send(result);
})

// Delete User Recommendation
app.delete('/recommend/:id', async (req,res) =>{
   const id = req.params.id;
   const query =  {_id: new ObjectId(id)}
   const result = await recommendCollection.deleteOne(query);
   res.send(result);
})

// Update Queries
app.put('/queries/:id', async (req, res) => {
   const id = req.params.id;
   const filter = { _id: new ObjectId(id) }
   const option = { upsert: true }
   const updatedDetails = req.body;
   const details = {
      $set: {
         productImage: updatedDetails.productImage,
         queryTitle: updatedDetails.queryTitle,
         productName: updatedDetails.productName,
         brandName: updatedDetails.brandName,
         alternationReason: updatedDetails.alternationReason,
         datePosted: updatedDetails.datePosted,
         boycottingReasonDetails: updatedDetails.boycottingReasonDetails,
         recommendationCount: updatedDetails.recommendationCount,
         queryUserName: updatedDetails.queryUserName,
         queryUserEmail: updatedDetails.queryUserEmail,
         queryUserImage: updatedDetails.queryUserImage,

      }
   }
   const result = await queriesCollection.updateOne(filter, details, option);
   res.send(result)
})





    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
   //  await client.close();
  }
}
run().catch(console.dir);









app.get('/', (req, res)=>{
   res.send('Explore Alternate Server is Running')
})

app.listen(port, ()=>{
   console.log(`Explore Alternate Server is Running on ${port}`)
})