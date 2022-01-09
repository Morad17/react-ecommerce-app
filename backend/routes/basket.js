const Basket = require("../models/Basket");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();

//Create

router.post("/", verifyToken, async (req,res)=>{
    const newBasket = new Basket(req.body)

    try{
        const savedBasket = await newBasket.save();
        res.status(200).json(savedBasket);
        console.log(savedBasket);
    }catch(err){
        res.status(500).json(err)
        console.log("error")
    }
})

//Update 

router.put("/:id", verifyTokenAndAuthorization, async (req,res)=>{
    
    try{
        const updatedBasket = await Basket.findByIdAndUpdate(
            req.params.id, 
        {
            $set: req.body
        },
            {new:true});
        res.status(200).json(updatedBasket);
    }catch (err) {
        res.status(500).json(err);
    }

})

//Delete

router.delete("/:id", verifyTokenAndAuthorization, async (req,res)=>{
    try{
        await Basket.findByIdAndDelete(req.params.id)
        res.status(200).json("The Basket item has been deleted")

    }catch(err){
        res(500).json(err)
    }
})

//Get User Basket

router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res)=>{
    try{ 
         const basket = await Basket.findOne({userId: req.params.userId });
         res.status(200).json(basket)
     }catch (err){
         res.status(500).json(err);
     }
 });

//Get All Basket Items

router.get("/", verifyTokenAndAdmin, async (req,res)=>{
    try{
        const baskets = await Basket.find()
        res.status(200).json(baskets)

    }catch(err){
        res(500).json(err)
    }
})


module.exports = router;