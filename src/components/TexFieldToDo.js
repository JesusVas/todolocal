import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ToDoContext from '../context/ToDo';
import { useContext } from 'react';
function TexFieldToDo(){
    const {work,handleForm,handleClick}=useContext(ToDoContext);
    return(
        <div>
            <TextField value={work} id="outlined-basic" onChange={(e) => handleForm(e.target.value)} />
            <Button variant="text" onClick={handleClick} >ADD</Button>
        </div>
    );
}
export default TexFieldToDo;