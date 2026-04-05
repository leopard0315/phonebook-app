import React from 'react'
import { TextField,Box,Button,Typography} from '@mui/material';
import { useState } from 'react';
import usePhoneBookStore from '../store/usePhonebookStore';

const ContactForm = () => {
    const [name,setName] = useState("");
    const [phoneNumber,setPhoneNumber] = useState("");
    
    const { addContact, phoneBook } = usePhoneBookStore();
    const handleAddContact =()=>{
        if (!name.trim() || !phoneNumber.trim()) return;

        addContact(name,phoneNumber);

        // add버튼 누르면 초기화
        setName("");
        setPhoneNumber("");  
    };
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <Typography variant="h6">현재 연락처: {phoneBook.length}명</Typography>
        <TextField id="name" label="name" variant="outlined" value={name} onChange={(e)=>setName(e.target.value)}/>
        <TextField id="phone-number" label="phone number" variant="outlined" value = {phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
        <Button variant="contained" size ="Large" onClick={handleAddContact}>Add</Button>
    </Box>
  )
}

export default ContactForm;