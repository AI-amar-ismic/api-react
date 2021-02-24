import React ,{useState, useEffect}from 'react'

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { RadioGroup, Radio, FormControlLabel } from '@material-ui/core';

export default function NewOrderDialog({handleClose, open, balance, handleSaveAndClose}){
    const [newBalance, setNewBalance] = useState([])

    // useEffect(()=>{
    //     setNewBalance(balance);
    // },[])

    const handleSubmit=()=>{
        handleSaveAndClose(newBalance);
    }

    const handleChange=(event)=>{
        setNewBalance(event.target.value);
    }

    
    return(
        <div>
            <Dialog handleClose={handleClose} open={open}>
                <DialogTitle id="simple-dialog-title">New Order</DialogTitle>
                <DialogContent>
                    <TextField id="amount" label="Amount" name="amount" variant="outlined" value={newBalance} onChange={handleChange}/>
                    <Button onClick={handleSubmit}>Buy</Button>
                </DialogContent>
                <Button onClick={handleClose}>Close</Button>
            </Dialog>
        </div>
    )
}