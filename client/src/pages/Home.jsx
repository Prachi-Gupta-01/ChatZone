import React from 'react'
import AppLayout from '../components/layout/AppLayout'
import { grayColor } from '../constants/color';
import { Typography,Box } from '@mui/material';
const Home = () => {
  return (
    <Box bgcolor = {grayColor} height = {"100%"}>
      <Typography p ={"2rem"  } variant = "h5" textAlign={"center"}>Select a Friend to Chat.</Typography>
    </Box>
  )
}

export default AppLayout()(Home);

