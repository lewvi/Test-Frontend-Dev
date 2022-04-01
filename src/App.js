import React from 'react';
import './App.css';

import Container from '@material-ui/core/Container';

import Header from './component/Header';
import Search from './component/Search';
import CardData from './component/CardData';

function App() {

  return (
    <div className='App'>
      <Header />
      <Container style={{ height: '10vh', width: '1440px', }}>
        <Search />
      </Container>
      <Container style={{ height: '500vh', width: '85vh' }}>
        <CardData />
      </Container>
    </div>
  );

}


export default App;
