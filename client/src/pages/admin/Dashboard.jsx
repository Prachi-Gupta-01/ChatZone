import React from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import { Container, Paper, Stack, Typography,Box } from '@mui/material'
import { AdminPanelSettings as AdminPanelSettingsIcon, Group as GroupIcon, Notifications as NotificationsIcon, Person as PersonIcon,Message as MessageIcon} from '@mui/icons-material'
import moment from 'moment'
import {SearchField,CurveButton} from "../../components/styles/StyledComponents"
import { matBlack } from '../../constants/color'
const Dashboard = () => {
const Appbar =(
  <Paper 
  elevation={3}
  sx={{
    padding:"2rem",margin:"2rem 0",borderRadius:"1rem"
  }}
  >
    <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
      <AdminPanelSettingsIcon sx={{fontSize:'3rem'}}/>
      <SearchField />
      <CurveButton>Search</CurveButton>
      <Box flexGrow={1}/>
      <Typography
      display={{
        xs:"none",
        lg:"block"
      }}
      color={"rgba(0,0,0,0.7)"}
      textAlign={"center"}
      
      >
        {moment().format('dddd D MMMM  YYYY')}
      </Typography>
      <NotificationsIcon/>
    </Stack>
  </Paper>
)
const Widgets=
<Stack
    direction={{
      xs:"column",
      sm:"row",
    }}
    spacing={"2rem"}
    justifyContent={"space-between"}
    alignItems={"center"}
    margin={"2rem 0"}
>
  <Widget title={"Users"} value={34} Icon={<PersonIcon/>}/>
  <Widget title={"Chats"} value={4} Icon={<GroupIcon/>}/>
  <Widget title={"Messages"} value={45} Icon={<MessageIcon/>}/>

</Stack>

  return (
    <AdminLayout>
     <Container component={"main"}>
      {Appbar}

      <Stack
      direction={"row"} spacing={"2rem"} flexWrap={"wrap"}
      >
        <Paper
        elevation={3}
        sx={{
          padding:"2rem 3.5rem",
          borderRadius:"1rem",
          width:"100%",
          maxWidth:"45rem",
           height:"25rem"
        }}
        >
          <Typography variant='h4' margin={"2rem 0"} >{""} Last Messages</Typography>
          {"CHart"}
        </Paper>

        <Paper
        elevation={3}
        sx={{
          padding:"1rem",
          borderRadius:"rem",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          width:{xs:"100%",sm:"50%"},
          position:"relative",
          width:"100%",
          maxWidth:"25rem",
          height:"25rem"
        }}
        >{"Donut Chart"}

        <Stack  
           position={"absolute"}
           direction={"row"}
           justifyContent={"center"}
           alignItems={"center"}
           spacing={"0.5rem"}
           width={"100%"}
           height={"100%"}
           >
<GroupIcon/> <Typography>Vs</Typography>
<PersonIcon/>
        </Stack>

        </Paper>

      </Stack>

      {
        Widgets
      }


     </Container>
    </AdminLayout>
  )
}
const Widget=({title,value,Icon})=> 
<Paper elevation={3}
sx={{
  padding:"2rem",
  margin:"2rem 0",
  borderRadius:"1.5rem",
  width:"20rem"
}}
>
  <Stack alignItems={"center"} spacing={"1rem"}
  >
    <Typography
    sx={{
      color:"rgba(0,0,0,0.7)",
      borderRadius:"50%",
      border:`5px solid ${matBlack}`,
      width:"5rem",
      height:"5rem",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    }}
    >{value}</Typography>
    <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
      {Icon}
      <Typography>{title}</Typography>
    </Stack>

  </Stack>
</Paper>
export default Dashboard
