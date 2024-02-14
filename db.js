import mongoose from "mongoose";

const connect = async () => {
    try{
await mongoose.connect(process.env.MONGO_URL,{

    useNewUrlParser : true,
    useUnifiedTopology : true
})
console.log('mongo db is connected successfully');
    }
    catch(error){
throw new Error('mongoo db is not connected')
    }
}

export default connect;