import mongoose from "mongoose"

//  mondodb connect

export const ConnectMongo = async () => {
  mongoose
    .connect("mongodb://localhost:27017")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err))
}

export const DisconectMongo = async () => {
  mongoose.disconnect().then(() => console.log("MongoDB disconnected"))
}
