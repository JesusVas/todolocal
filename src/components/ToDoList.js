import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import ToDoContext from '../context/ToDo';
import { useContext } from 'react';
function ToDoList() {
  const{toDo,toDoEditing,setEditingText,setToDo,editToDo,handleCancel,setToDoEditing}=useContext(ToDoContext);
  return (
   <div>
      <List>
        {toDo.map((dats) => (
        <ListItem key={dats.id}  style={{display:'flex', justifyContent:'space-between',alignItems: 'center'}}>
         <div>
          {
            toDoEditing===dats.id ?
              (<input type="text" onChange={(e)=>setEditingText(e.target.value)} defaultValue={dats.content}/>) : 
              (<div style={{alignItems: "center",marginRight: '90px'}} >{dats.content}</div>)
          } 
         </div>
         <div>
        <IconButton onClick={async()=>{await axios.delete(`http://localhost:3001/content/${dats.id}`);setToDo(toDo.filter(a=> a.id!==dats.id))}}  >
          <DeleteIcon  />
        </IconButton>
        
        {
          toDoEditing===dats.id ?
            ( <><Button onClick={()=>editToDo(dats.id)}>Submit</Button> <Button onClick={handleCancel}>Cancel</Button></>):
            (<IconButton onClick={()=>setToDoEditing(dats.id)}><EditIcon /></IconButton>)
        }
        </div>
        </ListItem>
         ))}
        
      </List>
      
   </div>
  );
}
export default ToDoList;