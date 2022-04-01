import React from "react"
import './Search.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export default function Search() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className="Group3691">
                <div className="inputBox">
                    <div className="">
                       {/*  <p className="RestaurentText">Restaurent</p> */}
                    </div> 
                </div>
                <div className="inputBox2">
                    <div className="">
                        {/* <p className="SearchNameText">Search name...</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}