import mongoose from "mongoose"

export const LogRegisterSchema = new mongoose.Schema({
  IpUser: String,
  DateTime: Date, //union of date and time based on log
  NameUser: String,
  TimeConnection: String,
  idLog: String,
  titleLog: String,
  mensage: String,
})
