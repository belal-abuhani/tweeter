import React, { useState, useEffect } from "react"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
// import { search } from '../../../../routers';

const useStyles = makeStyles((theme) => ({

    roots: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

export default function Search({ send }) {
    const classes = useStyles();
    const [search, setsearch] = useState("");

    // useEffect(() => {
    //     console.log(search)
    // })
    // send

    return (
        <Paper component="form" className={classes.roots}>
            <div className='d-flex rounded w-75 border border-primary' >

                <InputBase
                    className={classes.input}
                    placeholder="Search..."
                    inputProps={{ 'aria-label': 'search google maps' }}
                    onChange={(e) => setsearch(e.target.value)}
                />
                <Divider className={classes.divider} orientation="vertical" />

                <IconButton onClick={() => send(search)} color="primary" className={classes.iconButton} aria-label="directions">
                    <SearchIcon />
                </IconButton >
            </div>
        </Paper>
    );
}