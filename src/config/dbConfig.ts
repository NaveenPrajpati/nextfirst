import mongoose from "mongoose";

export async function dbconnect() {
try {
    mongoose.connect(process.env.BASE_URL!)
    const connection=mongoose.connection;
    connection.on('connected',()=>{
        console.log('db connected successfully')
    })
    connection.on('error',(error)=>{
        console.log('error occur in db connection ',error)
    })
} catch (error) {
    console.log(error)
}
}