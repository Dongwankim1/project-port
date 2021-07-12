import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { classes } from 'istanbul-lib-coverage';
import img from '../../../assets/images/logo.png'
import GridItem from './GridItem/GridItem';
import * as api from '../../../api/database';
import './MainGrid.css'
import Nav from '../Nav/Nav'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "60px",
    margin: "20px",
    width: "100%",
    position: 'relative',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const MainGrid = () => {
  const classes = useStyles();
  const [DocList, setDocList] = useState([]);

  useEffect(async () => {
    const jsondata = await api.Doclist();
    setDocList(jsondata);

  }, [])


  return <div className={classes.root}>
    <div className="MainGrid">
      
      <Nav />

      <div className="card card-4">
        <Grid container spacing={3}>
          {console.log('aaaaaa', DocList)}
          {DocList.length !== 0 ? DocList.map((item, index) => (
            <GridItem key={index} item={item} ></GridItem>
          )) : null}

        </Grid>
      </div>
    </div>

  </div>
}

export default MainGrid;