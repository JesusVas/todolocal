import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
function ToDoList(props) {
  return (
   <div>
      <List>
        {props.toDos.map((dats) => (
        <ListItem key={dats.id}  style={{display:'flex', justifyContent:'space-between',alignItems: 'center'}}>
         <div>
          {
            props.toEdit===dats.id ?
              (<input type="text" onChange={(e)=>props.textEdit(e.target.value)} defaultValue={dats.content}/>) : 
              (<div style={{alignItems: "center",marginRight: '90px'}} >{dats.content}</div>)
          } 
         </div>
         <div>
        <IconButton onClick={async()=>{await axios.delete(`http://localhost:3001/content/${dats.id}`);props.setter(props.toDos.filter(a=> a.id!==dats.id))}}  >
          <DeleteIcon  />
        </IconButton>
        
        {
          props.toEdit===dats.id ?
            ( <><Button onClick={()=>props.editTo(dats.id)}>Submit</Button> <Button onClick={props.cancel}>Cancel</Button></>):
            (<IconButton onClick={()=>props.edit(dats.id)}><EditIcon /></IconButton>)
        }
        </div>
        </ListItem>
         ))}
        
      </List>
      
   </div>
  );
}
export default ToDoList;