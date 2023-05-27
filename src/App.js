import {useState} from 'react';
import TextFieldToDo from './components/TexFieldToDo';
import ToDoList from './components/ToDoList';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import axios from 'axios';
function App(){
   
    return( 
        <div>
            <Box 
            margin='auto'>

                    <Stack alignItems="center">
                        <AppBar position="static">
                            
                            <Toolbar>
                                <IconButton>
                                <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 20 }}>
                                    <p align="center">To Do List js</p>
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <br/>
                        <TextFieldToDo acts={work} form={handleForm} click={handleClick}/>
                        <br/>
                    
                        <ToDoList 
                         toDos={toDo} 
                         setter={setToDo} 
                         edit={setToDoEditing} 
                         toEdit={toDoEditing} 
                         textEdit={setEditingText} 
                         setText={editingText} 
                         editTo={editToDo} 
                         cancel={handleCancel}
                        
                         />
                        
                    </Stack>
            </Box>
        </div>
    );
   
}   
export default App;