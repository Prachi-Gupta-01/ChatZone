import React ,{memo}from 'react'
import { Link } from '../styles/StyledComponents'

import { Typography ,Stack,Box} from '@mui/material'
import AvatarCard from './AvatarCard'
const ChatItem = ({
  avatar =[],
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert ,
  index =0,
  handleDeleteChat, 

}) => {
  return (
    <Link
     sx={{
      padding:"0",
     }}
    to ={`/chat/${_id}`} onContextMenu={(e) => handleDeleteChat(e, _id,groupChat)}>
      <div style ={{
        display: "flex",
        gap: "1rem",
        padding: "1rem",
        alignItems: "center",
        backgroundColor: sameSender ? "black" : "unset",
        color: sameSender ? "white" : "unset",
        justifyContent: "space-between",
        position: "relative",
      }}>

      {/* Avatar Card*/}
      <AvatarCard avatar={avatar}/>
      <Stack>
        <Typography>{name}</Typography>
        {
          newMessageAlert && (
            <Typography>{newMessageAlert.count}New Message</Typography>
          )
        }
      </Stack>

      {isOnline && (<Box 
      sx={{
        width: "0.5rem",
        height: "0.5rem",
        borderRadius: "50%",
        backgroundColor: "green",
        position: "absolute",
        right: "0.5rem",
        bottom: "0.5rem",
        transfrom:"translate(-50%)",
      }}
      />
    )}
      </div>
    </Link>
  )
}

export default memo(ChatItem)
