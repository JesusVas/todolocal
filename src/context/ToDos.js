import { createContext,useState } from "react";
import axios from "axios";
const ToDoContext=createContext()
function Provider({children}){
    const [toDo, setToDo] = useState([]);
    const [work, setWork] = useState("");
    const [toDoEditing,setToDoEditing]=useState([]);
    const [editingText,setEditingText]=useState("");
//corregir todo lo que no sirve
//avanzar cap 9
    const addToDo=async()=> {//editar esto
        const response=await axios.post('http://localhost:3001/content',{
            work,
        });
          const obj = {id:response.data.id ,content: response.data.work };
          const newAct = [...toDo, obj];
          setToDo(newAct);
          setWork("");
    }
    const submitWork = (act) => {
        setWork(act);
    };
    const deleteToDos= async (id)=>{
        await axios.delete(`http://localhost:3001/content/${id}`)
       
        const updateToDo=toDo.filter((newToDo)=>{
            return newToDo.id!==id;
        })
        setToDo(updateToDo);
    }
    const editToDo=async(id)=>{
        const response=await axios.put(`http://localhost:3001/content/${id}`,{
            content:editingText
        })
       
        const updateToDo=[...toDo].map((todo)=>{
            if(todo.id===id){
                todo.content=response.data.content
            }
            return todo;
        });
        setToDo(updateToDo);
        setToDoEditing(null);
        
    }
    const handleCancel=(a)=>{
        const updateToDo=[...toDo].map((todo)=>{
            if(todo.id===a){
                todo.text=editingText
            }
            return todo;
        });
        setToDo(updateToDo);
        setToDoEditing(null)
    }
    const valueToShare={
        toDoEditing,addToDo,handleCancel,submitWork,setEditingText,toDo,
        setToDoEditing,editingText,editToDo,work,deleteToDos
    }
    return<ToDoContext.Provider value={valueToShare}>{children}</ToDoContext.Provider>
}
export {Provider};
export default ToDoContext;