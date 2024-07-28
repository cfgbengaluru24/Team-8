import mongoose from "mongoose";
const { Schema } = mongoose;
const memberSchema = new Schema({
    memberId: {
      type: String,
      required: true,
    },
    baseline: {
      type: Number,
      required: true,
    },
    endline: {
      type: Number,
      required: true,
    },
    isactive:{
        type: Boolean,
        required: true
    }
  }, { _id: false });

const shgSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    auto: true,
    required: true,
    default: () => new mongoose.Types.ObjectId(), 
  },
  name: {
    type: String,
    required: true,
    trim: true,
    unique : true
  },
  leader: {
    type: String ,

  },
  location: {
      type: String,
      required: true
  },
  memberList: [memberSchema],
  CurrFund: {
    type: Number,
    default: 0,
  },
  CurrLoan: {
    type: Number,
    default: 0,
  },
  BusinessMember:{
    type: Number ,
    default : 0,
  },
  baseline: {
    type: Number,
    required: true,
  },
  endline: {
    type: Number,
    required: true,
  },
});

const SHG = mongoose.model("SHG", shgSchema)

export default SHG