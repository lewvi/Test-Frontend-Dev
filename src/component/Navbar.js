import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { borders } from '@material-ui/system';
import Toolbar from '@material-ui/core/Toolbar';
import './Navbar.css'

const useStyles = makeStyles((theme) => ({
    Rectangle1: {
        style: {
            height: '1456px',
            width:' 90px',
            left: '0px',
            top: '0px',
        }
    }
}));

function Navbar() {
    const classes = useStyles();

    return (
        <>
            <div className="Group2935">
                <div className="Group2909"></div>
                <div className="Group1243"></div>
                <div className="top_bar_bg"></div>
            </div>
            <div className="Group2940">
                <div className="Group2887"></div>
                <div className="image3"></div>
                <div className="Vector87"></div>
                <div className="Vector79"></div>
                <div className="Rectangle1"></div>
            </div>
        </>

    )

}

export default Navbar