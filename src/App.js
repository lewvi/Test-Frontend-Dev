import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import './App.css';

import Navbar from './component/Navbar';
import Search from './component/Search';
import { Style } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({

}));


function App() {

  const classes = useStyles();

  const PlaceListText = styled.h5 (

  )

  return (
      <div className='App'>
        <Navbar />
        <PlaceListText>Hii</PlaceListText>
        {/* <h5 className='textApp'>Place List</h5> */}
        <Search />
      </div>
  );
}

export default App;
