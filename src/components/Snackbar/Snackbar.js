import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlret from '@material-ui/lab/Alert'

import useStyles from './styles'


const CustomizedSnackbar = ({ open , setOpen }) => {
    const classes = useStyles()

    const handleClose = (event, reason) => {
        if(reason === 'clickaway') return;

        setOpen(false)
    }

    return (
        <div className={classes.root}>
            <Snackbar 
               anchorOrigin={{ vertical: 'top', horizontal: 'right'}}
               open={open}
               autoHideDuration={3000}
               onClose={handleClose}
            >
              <MuiAlret onClose={handleClose} severity="success" elevation={6} variant="filled">
                  Treansaction successfully created.
              </MuiAlret>
            </Snackbar>
        </div>
    )
}

export default CustomizedSnackbar
