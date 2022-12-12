import mongoose from 'mongoose';

const Connection = async () => {
    const URL = (process.env.Mongo_URL)

    try {
        

        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;