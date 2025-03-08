import { Dialog, DialogTitle, Stack, Typography ,Button} from '@mui/material'
import React, { useState } from 'react'
import { sampleUsers } from '../../constants/sampleData'
import UserItem from "../shared/UserItem"




const AddMemberDialog = ({addMember,isLoadingAddMember,chatId}) => {

  const [members,setMembers] = useState(sampleUsers);
  const[selectedMembers,setSelectedMembers] = useState([])

  const selectMemberHandler = (id) =>{
    setSelectedMembers((prev) =>prev.includes(id) ? prev.filter((currElement) => currElement !== id):[...prev,id])
   
  }

  
  const addMemberSubmitHandler =()=>{
    closeHandler()
  }
  const closeHandler=()=>{
    setSelectedMembers([]);
    setMembers([])
  }
  return (
    <Dialog open onClose={closeHandler}>
      <Stack spacing={"2rem"} width={"20rem"} p={"2rem"}>
        <DialogTitle textAlign={"center"}>Add Member</DialogTitle>
        <Stack>
{
  members.length>0 ?    members.map((i) =>(
        <UserItem key ={i.id} user={i} handler ={selectMemberHandler}
        isAdded = {selectedMembers.includes(i._id)}
        />
      )):<Typography textAlign={"center"}>No friends</Typography>
}
        </Stack>

 <Stack direction={"row"} alignItems={"center"} justifyContent={"space-evenly"}>
 <Button variant ="contained" disabled ={isLoadingAddMember} onClick={addMemberSubmitHandler}>Submit Changes</Button>
 <Button color ="error" onClick={closeHandler}>Cancel</Button>
 </Stack>

      </Stack>
    </Dialog>
  )
}

export default AddMemberDialog
