import { useEffect, useState } from "react";
import React from "react";
import Price from "./api";
import { Button } from "@material-ui/core";
import NewOrderDialog from "./dialog";
import "./tradeScreen.css";

export default function TradeScreen(){
    const [price, setPrice]= useState([]);
    const [buyDialogOpen, setBuyDialogOpen] = useState(false)
    let [bitcoins, setBitcoins] = useState(1)
    
    useEffect(()=>{
        Price().then(result =>{
            const priceResult = result.data;
            
            
            setPrice(priceResult.bpi.USD.rate); 
            
        })
    },[])

    const openDialog=(value)=>(event)=>{
        setBuyDialogOpen(true);
        setBitcoins(value);
    }

    const handleClose=()=>{
        setBuyDialogOpen(false);
    }

    const handleSaveAndClose=(balance)=>{
        updateBalance(balance);
        setBuyDialogOpen(false);
    }

    const updateBalance=(balance)=>{
        setBitcoins(bitcoins+ parseFloat(balance));
    }

    return (
        <div className='tradeScreen'>
            <h1>Trade</h1>
            <div className="landingInfo">
                <h3>Balance: {bitcoins} BTC</h3>
                <h3>BTC/USD ${price}</h3>
            </div>
            <Button onClick={openDialog(bitcoins)}>New Order</Button>
            <NewOrderDialog open={buyDialogOpen} handleClose={handleClose} balance={bitcoins} handleSaveAndClose={handleSaveAndClose} o/>
         </div>
    );
}