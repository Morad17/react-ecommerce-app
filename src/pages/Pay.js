import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Key = "pk_test_51I3s7wIeCsFt2asbDyhzvcNhlziYlSBIlutczmcb4HIKZSdrlTyhY9KuGiCVmeZo6kZ9bxx3vU04jhlhAhTRq1qH00xhMjevJt"

const Pay = () => {
    const  [stripeToken, setStripeToken] = useState(null)

    const onToken= (token) =>{
        setStripeToken(token)
    }

    useEffect(() => {
        const makeRequest = async () =>{
            try{
                const res = await axios.post("http://localhost:5000/api/checkout/payment",
                    {
                        tokenId:stripeToken.id,
                        total: 2000,
                    }
                );
                console.log(res.data)
            }catch(err){
                console.log(err)
            };
        };
        stripeToken && makeRequest();
    }, [stripeToken])

    return (
        <div className="pay">
            <StripeCheckout 
                name="eShop" 
                billingAddress
                shippingAddress
                description='Your Total is £50'
                total={2000}
                token={onToken}
                stripeKey={Key}
                >
                <button>Pay</button>
            </StripeCheckout>
        </div>
    )
}

export default Pay
