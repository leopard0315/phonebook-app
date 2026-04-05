import { useState } from 'react'
import './App.css'
import { Grid } from '@mui/material';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

function App() {
  const [count, setCount] = useState(0)

  // 연락처가 추가된후에 리스트가 바로 업데이트가 된다.
  // 연락처를 이름으로 검색할 수 있다.

  return (
    <div className="App">
      <h1>연락처 앱</h1>
      <Grid container spacing={2}>
        <Grid size={6}>
          <ContactForm/>
        </Grid>
        <Grid size={6}>
          <ContactList/>
        </Grid>
      </Grid>
    </div>
   
  );
};

export default App;
