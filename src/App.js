import TextFieldToDo from './components/TexFieldToDo';
import ToDoList from './components/ToDoList';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import { Provider } from './context/ToDos';
/*Crear una app que simule el menu de un restaurante con typecript(antes de iniciar esto ver Todo y acabar este proyecto)
    por ej:una hanburguesa,un refresco,la orden debe imprimir un pdf 
*/
function App(){
   return( 
        <Provider>
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
                            <TextFieldToDo />
                            <br/>
                            <ToDoList />
                            
                        </Stack>
                </Box>
            </div>
        </Provider>  
    );
   
}   
export default App;