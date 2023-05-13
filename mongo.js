const { MongoClient } = require("mongodb");

const uri = "mongodb://mongodb";
const client = new MongoClient(uri);
async function run() {
    try {
        const database = client.db('test');
        const collection = database.collection('test');
        // Query for a movie that has the title 'Back to the Future'
        const query = {};
        const doc = await collection.findOne(query);
        console.log(doc);
        await collection.insertOne({ 'test': 1 })
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);