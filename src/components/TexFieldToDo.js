import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function TexFieldToDo(props){
    return(
        <div>
            <TextField value={props.acts} id="outlined-basic" onChange={(e) => props.form(e.target.value)} />
            <Button variant="text" onClick={props.click} >ADD</Button>
        </div>
    );
}
export default TexFieldToDo;