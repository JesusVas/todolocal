import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ToDoContext from '../context/ToDos';
import { useContext } from 'react';
function TexFieldToDo(){
    const {work,submitWork,addToDo}=useContext(ToDoContext);
    return(
        <div>
            <TextField value={work} id="outlined-basic" onChange={(e) => submitWork(e.target.value)} />
            <Button variant="text" onClick={addToDo} >ADD</Button>
        </div>
    );
}
export default TexFieldToDo;