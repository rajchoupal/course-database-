const MongoClient = require('mongodb').MongoClient;

const connectionString = 'mongodb+srv://rajchoupal323:Nanu6789@cluster1.lptghzi.mongodb.net/coursedetails'; 

const client = new MongoClient(connectionString);

client.connect(err => {
    if (err) {
        console.error('Error connecting to MongoDB:', err);
        return;
    }
    console.log('Connected to MongoDB!');
});
