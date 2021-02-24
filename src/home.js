import React, {useEffect, useState} from "react";
import Price from "./api";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Button } from "@material-ui/core";
import "./header.css";
import "./home.css"


export default function Home(){
    const [priceDataUSD, setPriceDataUSD] = useState([])
    const [priceDataEUR, setPriceDataEUR] = useState([])
    const [priceDataGBP, setPriceDataGBP] = useState([])

    useEffect(()=>{
        Price().then(result =>{
            const priceResult = result.data;
            
            console.log(priceResult);
            setPriceDataUSD(priceResult.bpi.USD); 
            setPriceDataEUR(priceResult.bpi.EUR); 
            setPriceDataGBP(priceResult.bpi.GBP); 
        })
    },[])

    const handleRefresh=()=>{
        Price().then(result =>{
            const priceResult = result.data;
            
            console.log(priceResult);
            setPriceDataUSD(priceResult.bpi.USD); 
            setPriceDataEUR(priceResult.bpi.EUR); 
            setPriceDataGBP(priceResult.bpi.GBP); 
        })
    }
    

    return (
        <div className='homeScreen'>
            <h1 className='homeText'>Current BTC price:</h1>
            <TableContainer>
                <TableHead>
                <TableRow>
                <TableCell>Currency</TableCell>
                <TableCell>Price</TableCell>
                
                
                </TableRow>
                </TableHead>
                <TableBody>
            
                <TableRow>
                <TableCell>{priceDataUSD.code}</TableCell>
                <TableCell>${priceDataUSD.rate}</TableCell>
                </TableRow>
                <TableRow>
                <TableCell>{priceDataGBP.code}</TableCell>
                <TableCell>£{priceDataGBP.rate}</TableCell>
                </TableRow>
                <TableRow>
                <TableCell>{priceDataEUR.code}</TableCell>
                <TableCell>€{priceDataEUR.rate}</TableCell>
                </TableRow>
                
            
            </TableBody>
            </TableContainer>
            <Button onClick={handleRefresh}>Refresh</Button>
            
        </div>
    );
}