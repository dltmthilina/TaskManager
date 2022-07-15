import { Card, Box, IconButton, Typography } from '@mui/material'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import React from 'react'


import "./CardContent.css"
import { AddBoxSharp } from '@mui/icons-material'

function CardContent({name, description, date, deleteHandler}) {

  const deleteTaskHandler=()=>{
    deleteHandler(name)
  }
     

  return (
    <Card className='content'>
      
        <Box sx={{
          width:'100%',
          display:'flex',
          alignItems:'center',
          justifyContent:'space-between'

        }}>
          <Typography>{name}</Typography>
          <IconButton aria-label="close" onClick={deleteTaskHandler}>
               <CloseOutlinedIcon/>
            </IconButton>
        </Box>

        <Box><Typography variant='p'>{description}</Typography></Box>
        <Box sx={{mt:'0.5em', display:'flex', justifyContent:'flex-end'}}><Typography variant='body2'>{date}</Typography></Box>
    </Card>
  )
}

export default CardContent