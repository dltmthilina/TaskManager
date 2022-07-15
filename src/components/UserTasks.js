import { Card, Box, Button } from "@mui/material";
import React,{useState, useEffect} from "react";

import {useSelector } from "react-redux";

import CardContent from "./CardContent";
import Tasks from "./Tasks"



function UserTasks() {
  
const [totalTasks, setTotalTasks] = useState(Tasks) 
const enteredTask = useSelector(state=>state.task.tasks)



useEffect(()=>{
  setTotalTasks(prevTasks=>{
    const updatedTasks = [...prevTasks];
    if(!enteredTask){
      return
    }
    updatedTasks.push(enteredTask)
    return updatedTasks
    
  })
},[enteredTask])


const deleteHandler=name=>{
   setTotalTasks(prevTasks=>{
   const updatedTasks = prevTasks.filter(task=>task.name !== name);
   return updatedTasks
   })
}

  return (
    <Card>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {totalTasks.map((task) => (
           <CardContent
           deleteHandler={deleteHandler}
            key={task.name}
            name={task.name}
            description={task.description}
            date={task.date}
          />
        ))}
      </Box>

    </Card>
  );
}

export default UserTasks;
