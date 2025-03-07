import React from 'react'
import { Avatar, Stack, Typography } from '@mui/material'
import {Face as FaceIcon,
  AlternateEmail as UserNameIcon,
 CalendarMonth as CalendarIcon
} from '@mui/icons-material'
import moment from 'moment'
const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"} >
      <Avatar sx={{
        width: 200,
         height: 200,
         objectFit:"contain",
         marginBottom: "1rem",
         border:"5px solid #fff"
         }}/>
      <ProfileCard heading ={"Bio"} text ={"Can do anything!!"} />
      <ProfileCard heading ={"Username"} text ={" prachi"} Icon ={<UserNameIcon/>} />
      <ProfileCard heading ={"Name"} text ={"prachiii"} Icon ={<FaceIcon/>}/>
      <ProfileCard heading ={"Joined"} text ={moment("2024-03-07T22:12:00.000z").fromNow()} Icon ={<CalendarIcon/>}/>
    </Stack>
  )
}
const ProfileCard = ({text,Icon,heading}) => <Stack
 direction={"row"}
  alignItems={"center"}
  spacing={"1rem"}
  color={"#fff"}
  textAlign={"center"}
>
{Icon && Icon}
<Stack>
  <Typography variant='body1'>{text}</Typography>
  <Typography color='gray' variant='caption'>{heading}</Typography>
</Stack>
</Stack>
export default Profile
