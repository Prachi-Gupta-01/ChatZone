import React, { Suspense } from 'react'
import{AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip} from '@mui/material'
import { blue } from '../../constants/color'
import Typography from '@mui/material/Typography'
import {Menu as MenuIcon,Search as SearchIcon,Add as AddIcon , Group as  GroupIcon,Logout as LogoutIcon , Notifications as NotificationsIcon } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { lazy } from 'react'
const SearchDialog = lazy(() => import('../specific/Search'))

const NotificationDialog = lazy(() => import('../specific/Notifications'))
const NewGroupDialog = lazy(() => import('../dialogs/NewGroup'))
const Header = () => {
  const navigate = useNavigate();

  const [ismobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  
  const handleMobile = () => {
    
    setIsMobile((prev) => !prev)
  };
  const openSearch = () => {
    setIsSearch((prev) => !prev)

  };
  const openNewGroup = () => {
    setIsNewGroup((prev) => !prev)
  };
  const openNotification = () => {
    setIsNotification((prev) => !prev)
  };
  const navigateToGroup = () =>navigate("/groups ")
  const logoutHandler = () => {
    console.log("logout")
  }
  return<>
  <Box sx = {{flexGrow:1}} height = {"4rem"}>
    <AppBar position = "static" sx= {{
      bgcolor:blue,
    }}>
      <Toolbar>

        <Typography 
        variant = "h6"
        sx ={{
          display: {xs:"none", sm:"block"},
        }}>
          ChatZone
        </Typography>
        <Box sx = {{
          display: {xs:"block", sm:"none"},
        }}>
          <IconButton color='inherit' onClick={handleMobile}>
            <MenuIcon />
          </IconButton>
        </Box>
        <Box sx = {{flexGrow:1}} />
        <Box>

        <IconBtn icon = {<SearchIcon />} title = "Search" onClick = {openSearch} />

        <IconBtn icon = {<AddIcon />} title = "New Group" onClick = {openNewGroup} />

         <IconBtn icon = {<GroupIcon />} title = "Manage Groups" onClick = {navigateToGroup} />
        <IconBtn icon = {<NotificationsIcon />} title = "Notification" onClick = {openNotification} />
        <IconBtn icon ={<LogoutIcon/>} title = "Logout" onClick ={logoutHandler} />
       
        </Box>
      </Toolbar>
    </AppBar>

  </Box>
  {isSearch && (
    <Suspense fallback = {<Backdrop open={true} />}>
      <SearchDialog/>
      </Suspense>
  )}
   {isNotification && (
    <Suspense fallback = {<Backdrop open={true} />}>
      <NotificationDialog/>
      </Suspense>
  )}
   {isNewGroup && (
    <Suspense fallback = {<Backdrop open={true} />}>
      <NewGroupDialog/>
      </Suspense>
  )}
  
  </>
}

const IconBtn = ({icon, title, onClick}) => {
  return( <Tooltip title={title}>
    <IconButton color='inherit' size="large" onClick={onClick}>
      {icon}
    </IconButton>
  </Tooltip>);
}

export default Header
