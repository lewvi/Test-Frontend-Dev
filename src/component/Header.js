import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Box from '@material-ui/core/Box';
import './Header.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                    </Typography>
                    <AccountCircle />
                </Toolbar>
            </AppBar>
            <div className="Group2940">
                <Box className="Rectangle1">
                    <img className='image3' src='ics.png'></img>
                </Box>
                <div className='vector79'></div>
                <Box className="Group2887">
                    <div className='Group2808'>
                        <div className="Rectangle547"></div>
                    </div>
                    <div className="typography">
                        <h5 className="Settext">Place</h5>
                    </div>
                </Box>
                <div className='vector87'></div>
            </div>
        </div>
    );
}
