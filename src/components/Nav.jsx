import styled from '@emotion/styled'
import { AppBar, InputBase, MenuItem, Toolbar, Typography,Menu } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const StyledToolbar=styled(Toolbar)({
    display:'flex',
    justifyContent:"space-between"
})
const Search = styled('div')({
    backgroundColor:'white',
    padding:'0px 10px',
    borderRadius:'5px',
    width:'40%',
   
 })
 const Title = styled('div')({
       display:'flex',
       justifyContent:"space-around",
       width:"120px",
       cursor:'pointer',
      
 })

const Nav = () => {
 const [open,setOpen] = useState(false)
  return (
      <>
          <AppBar position='sticky' sx={{backgroundColor:'pink'}} >
              <StyledToolbar>
                 <img style={{width:"60px"}} src='https://www.freeiconspng.com/thumbs/hd-tickets/download-ticket-ticket-free-entertainment-icon-orange-ticket-design-0.png'/>
                   <Typography varient='h6'> MOVIE BOOKING APP</Typography>
                 <Title>
                     {/* <Typography>Home</Typography>
                     <Typography> Movies </Typography> */}
                     <NavLink to='/'>Home</NavLink>
                 </Title>
                 <Search> <InputBase placeholder='search Movie...'></InputBase> </Search>
                 <Typography onClick={()=>setOpen(true)} sx={{cursor:'pointer'}}> Login </Typography>
              </StyledToolbar>
              <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
            onClose={()=>setOpen(false)}
          open={open}
           anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
         >
        <MenuItem >Profile</MenuItem>
        <MenuItem >Logout</MenuItem>
        </Menu>
          </AppBar>
      </>
  )
}

export default Nav
