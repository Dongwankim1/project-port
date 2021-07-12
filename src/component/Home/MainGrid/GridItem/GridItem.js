import React from 'react';
import Grid from '@material-ui/core/Grid';
import './GridItem.css';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  }));

const GridItem = ({ item }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    


    const handleClickOpen = () => {
        setOpen(true);

    };

    const handleClose = () => {
        setOpen(false);

    };

    return (
        <Grid item xs={3} className="GridItem"  >
            <div className="GridItem__Wrap trainsition duration-200 ease-in transform sm:hover:scale-105 hover:z-50" onClick={handleClickOpen}>
                <div className="GridItem__ImageWrap">
                <img className="GridItem__logoimg" src={item.image[0]}></img>
                </div>
                <div className="GridItem__content">
                    <h2 className="GridItem__title transition-all duration-100 ease-in-out hover:font-bold">{item.title}</h2>
                    <h5 className="GridItem__date">{item.startdate} ~ {item.completedate}</h5>
                    <div>
                        javascript
                    </div>
                </div>
            </div>
            <Dialog
                fullScreen
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                className="Dialog"
            >
                <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                    <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    닫기
                    </Typography>
             
                </Toolbar>
                </AppBar>
           
                <DialogContent>
                    <div className="ModalContent">
                        <div className="ModalContent__imgDiv">
                            {item.image.length>0 ? item.image.map((img,index)=>(<div className="ModalContent__imgbox"><img className="ModalContent__imgitem" key={index} src={img}></img></div>)) :null}
                        </div>
                        <div className="ModalContent__job">aaa</div>
                    </div>
                </DialogContent>
              
            </Dialog>
        </Grid>
    )
}

export default GridItem;