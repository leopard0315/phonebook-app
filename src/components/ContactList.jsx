import React,{useState} from 'react'
import { TextField, List } from '@mui/material';
import usePhoneBookStore from '../store/usePhonebookStore';

const ContactList = () => {
  const {phoneBook,deleteContact} = usePhoneBookStore();
  const [keyword, setKeyword] = useState("");

  const filteredList = phoneBook.filter((item) =>
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );

    return (
    <div>
      <TextField 
        fullWidth 
        label="이름 검색" 
        variant="outlined" 
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        sx={{ mb: 2 }}
      />
        {filteredList.map((item)=>
        <div key ={item.id} style={{ borderBottom: '1px solid #ccc', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div>
            <p>{item.name}</p>
            <p>{item.phoneNumber}</p>
          </div>
          <button 
            onClick={() => {
              console.log("지우려는 id",item.id);
              deleteContact(item.id)}}
            style={{ color: 'red', cursor: 'pointer' }}
            >
            Delete
          </button>
        </div>)}
        
    </div>
  );
};

export default ContactList;