import React from 'react'
import { Menu } from '@mui/material'
const FileMenu = ({anchorE1}) => {
  return (
    <Menu  anchorEl={anchorE1} open={false}>
      <div
      style={{
        width:"10rem",
      }}
      >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nobis tempora non atque cumque distinctio natus mollitia ea molestiae optio expedita itaque hic praesentium, debitis, modi consequuntur explicabo! Earum, suscipit?
      </div>
    </Menu>
  )
}

export default FileMenu
