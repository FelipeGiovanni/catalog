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

//147.8.118.215;
//05-Mar-2022;
//3:03:04.000;
//Tres-Zap;
//0.52;
//662791006-3;
//Implemented fault-tolerant task-force;
//leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede
