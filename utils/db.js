import mongoose from 'mongoose'

let isConnected = false

export const connectDB = async () => {
    mongoose.set('strictQuery', true)

    if(isConnected) {
        console.log('Already Connected')
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "DevBrainz",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true
        console.log("Mongodb is connected")
    } catch (error) {
        console.log(error)
    }
}