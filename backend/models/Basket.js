const mongoose = require("mongoose")

const BasketSchema = new mongoose.Schema({
    userId: {type: String , required:true},
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
    ]
  },
  { timestamp: true }
)

module.exports = mongoose.model("Basket", BasketSchema);