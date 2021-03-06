const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({
    userId: {type: String },
    products: [
        {
            ProductId:{
                type:String
            },
            quantity: {
                type: Number,
                default: 1,
            }
        }
    ],
    total: {type: Number, required:true},
    address: {type:Object, required: true},
    status: {type: String, default: "pending"}
  },
  { timestamp: true }
)

module.exports = mongoose.model("Order", OrderSchema);