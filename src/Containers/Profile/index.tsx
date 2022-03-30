import { Box, Button } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React from 'react'

const Profile : React.FC = () => {
    const classes = useStyles();
  return (
    <Box className={classes.root} >
        <Button>Button</Button>
    </Box>
  )
}

export default Profile

export const useStyles = makeStyles({
    root: {
        display: 'flex',
    }
})