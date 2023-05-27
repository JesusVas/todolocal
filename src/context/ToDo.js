import { createContext,useState } from "react";
const ToDoContext=createContext()
function Provider({children}){
    const [toDo, setToDo] = useState([]);
    const [work, setWork] = useState("");
    const [toDoEditing,setToDoEditing]=useState([]);
    const [editingText,setEditingText]=useState("");

    const handleClick=async()=> {
        const response=await axios.post('http://localhost:3001/content',{
            work,
        });
          const obj = {id:response.data.id ,content: response.data.work };
          const newAct = [...toDo, obj];
          setToDo(newAct);
          setWork("");
    }
    const handleForm = (act) => {
        setWork(act);
    };
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
    return<ToDoContext.Provider value={valueToShare}>{children}</ToDoContext.Provider>
}
export {Provider};
export default ToDoContext;