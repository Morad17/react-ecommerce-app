const router = require("express").Router();
const stripe  = require("/payment", (req,res)=>{
    stripe.charges.create({
        source: req.body.tokenId,
        total: req.body.total,
        currency: "gbp",
    }, (stripeErr, stripeRes)=>{
        if(stripeErr){
            res.status(500).json(stripeErr)
        }else{
            res.status(200).json(stripeRes)
        }
    });
});

module.export = router;