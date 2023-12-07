const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const app = express();
require('dotenv').config()

// midlewares 
const cors = require('cors');
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5100;

const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.8gn4coa.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);


async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });

        const dbCollection = client.db('userdb').collection('users');
        app.get('/user', async (req, res) => {
            const data = dbCollection.find()
            const result = await data.toArray()
            res.send(result)
            console.log(result);
        })

        const products = client.db("brandshow").collection('products');

        // addproducts

        app.post("/products", async (req, res) => {
            const data = req.body
            const result = await products.insertOne(data)
            console.log(result)
            res.send(result)
        })

        // homepage slider data

        app.get('', async (req, res) => {
            const collec = client.db('brandshow').collection('slider')
            const data = collec.find()
            const datas = await data.toArray()
            res.send(datas)
            console.log(datas);
        })

        // homepage brands

        app.get('/brand', async (req, res) => {
            const collec = client.db('brandshow').collection('brand')
            const data = collec.find()
            const datas = await data.toArray()
            res.send(datas)
        })

        // all products data 

        app.get('/products', async (req, res) => {
            const data = products.find()
            const datas = await data.toArray();
            res.send(datas);
        })

        // brands products
        //<---------
        // sony
        app.get('/sony', async (req, res) => {
            const data = products.find({ brand: "Sony" })
            const datas = await data.toArray();
            res.send(datas)
        })
        // samsung
        app.get('/samsung', async (req, res) => {
            const data = products.find({ brand: "Samsung" })
            const datas = await data.toArray();
            res.send(datas)
        })
        // apple
        app.get('/apple', async (req, res) => {
            const data = products.find({ brand: "Apple" })
            const datas = await data.toArray();
            res.send(datas)
        })
        // oneplus 
        app.get('/oneplus', async (req, res) => {
            const data = products.find({ brand: "Oneplus" })
            const datas = await data.toArray();
            res.send(datas)
        })
        // huawei 
        app.get('/huawei', async (req, res) => {
            const data = products.find({ brand: "Huawei" })
            const datas = await data.toArray();
            res.send(datas)
        })
        // google 
        app.get('/google', async (req, res) => {
            const data = products.find({ brand: "Google" })
            const datas = await data.toArray();
            res.send(datas)
        })
        //------>

        // get one data for details
        app.get('/details/:id', async (req, res) => {
            const id = req.params.id
            // res.send(id)
            const data = await products.findOne({ _id: new ObjectId(id) })
            console.log(data);
            res.send(data)
        })

        // get update previous data api
        app.get('/update/:id', async (req, res) => {
            const id = req.params.id
            const data = await products.findOne({ _id: new ObjectId(id) })
            res.send(data)
        })

        // update data api 
        app.put('/updated/:id', async (req, res) => {
            const id = req.params.id
            const data = req.body
            const query = { _id: new ObjectId(id) }
            const updatesData = {
                $set: {
                    name: data.name,
                    img: data.img,
                    brand: data.brand,
                    category: data.category,
                    price: data.price,
                    desc: data.desc,
                    rating: data.rating
                }
            }
            const option = {
                upsert: true
            }

            const result = await products.updateOne(query, updatesData, option)
            console.log(result);
            res.send(result)
        })

        // add to product api
        const coll = client.db('brandshow').collection('addcart')

        app.post('/addcart', async (req, res) => {
            const data = req.body
            const result = await coll.insertOne(data)
            console.log(result)
            res.send(result)
        })

        app.get('/addcart', async (req, res) => {
            const data = coll.find()
            const datas = await data.toArray()
            res.send(datas)
        })

        // delete product api
        app.delete('/addcart/:id', async (req, res) => {
            const idstr = req.params.id
            console.log(typeof idstr)
            const query = { _id: idstr }
            const data = await coll.deleteOne(query)
            res.send(data)
            console.log(data);
        })


        // user data api 
        const usercollec = client.db('brandshow').collection('users')
        app.post("/user",async(req,res)=>{
            const d = req.body
            const result = await usercollec.insertOne(d)
            console.log(result)
            res.send(result)
        })

        app.get('/user/:id',async(req,res)=>{
            const id = req.params.id
            console.log(id);
            const result =await usercollec.findOne({email:id})
            res.send(result)
            console.log(result)
        })



        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

// app.get('', (req, res) => {
//     res.send("Server side is running!")
// })

app.listen(port, (req, res) => {
    console.log("Server is running in port:" + " " + port);
})