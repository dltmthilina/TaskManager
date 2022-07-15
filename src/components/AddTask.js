import React,{useState} from "react";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {
  Grid,
  TextField,
  Button,
  Card,
  Box,
  IconButton,
  Modal
} from "@mui/material";

import { useForm } from "react-hook-form";

import { useSelector, useDispatch } from "react-redux";
import {modalActions} from "../store/modalSlice"
import {addTaskActions} from "../store/formSlice"




function AddTask() {

const show = useSelector(state=>state.modal.showModal);
const dispatch = useDispatch();

const [task, setTask] = useState({});
const [name, setName] = useState('');
const [description, setDescription] = useState('');
const [date, SetDate] = useState('');


const onSubmit =(e)=>{
e.preventDefault();
if(!name || !description || !date){
  return
  
}

dispatch(addTaskActions.addTask({name, description, date}))
  
}


  return (
    <Modal open={show} sx={{padding:'1rem'}}>
      <Card
        style={{
          padding: "0 20px",
          margin: "0 auto",
          color: "black",
          borderRadius: "0",
        }}
        sx={{
            width:"30%",
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
        }}
      >
        <Box style={{
            width:'100%',
            position:'relative',
            display:'flex',
            justifyContent:'flex-end'
        }}>
            <IconButton aria-label="close" onClick={()=>{dispatch(modalActions.modalClose())}}>
                <CloseOutlinedIcon/>
            </IconButton>
        </Box>
       

          <form onSubmit={onSubmit}>

            <Grid container spacing={1}>
              <Grid  item sx={{width:'100%'}}>
                <label>Name</label>

                <TextField
                  onChange={(e)=>setName(e.target.value)}
                  placeholder="Name"
                  name='name'
                  type='text'
                  focused
                  variant="filled"
                  fullWidth
                  required
                  size="small"
                  
                />
              </Grid>

              <Grid item sx={{width:'100%'}}>
                <label>Description</label>
                <TextField
                onChange={(e)=>setDescription(e.target.value)}
                  placeholder="Description"
                  name="description"
                  multiline
                  rows={4}
                  type='text'
                  focused
                  variant="filled"
                  fullWidth
                  required
                  size="small"
                
                />
              </Grid>

              <Grid item sx={{width:'50%'}}>
                <label>Date</label>
                <TextField
                onChange={(e)=>SetDate(e.target.value)}
                  placeholder="Date"
                  name="date"
                  focused
                  type='date'
                  variant="filled"
                  fullWidth
                  required
                  size="small"
                
                  
                />
              </Grid>

              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
              </Grid>
   
            </Grid>

                <Box sx={{width:'100%', position:'relative', margin:'1rem'}}>
                    <Button
                            size="medium"
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{
                            fontSize:'12px',
                            width:'50%',
                            left:'25%',
                            
                            }}

                        >
                            Save
                        </Button>
                </Box>
          </form>
        
      </Card>
    </Modal>
  );
}

export default AddTask;
