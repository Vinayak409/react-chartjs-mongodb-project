import mongoose from "mongoose";

const Connection = async(username, password) => {
    const URL = `mongodb+srv://${username}:${password}@react-chartjs-project.tpv7ibi.mongodb.net/?retryWrites=true&w=majority`

    try {
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with database', error);
    }
}

export default Connection;