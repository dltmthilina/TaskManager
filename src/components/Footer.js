import React from 'react'
import {Box, Button} from "@mui/material"

import {useDispatch} from "react-redux"
import {modalActions} from "../store/modalSlice"

function Footer() {

    const dispatch = useDispatch();

  return (
    <div>
        <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "2rem",
        }}
      >
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            dispatch(modalActions.modalOpen());
          }}
        >
          + Add Task
        </Button>
        
      </Box>
    </div>
  )
}

export default Footer