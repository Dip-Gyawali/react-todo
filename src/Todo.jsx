import { useState } from "react";

function Todo(){
    const[taskList,setTaskList]=useState([]);
    const [colors, setColors] = useState([]);

    //to add new list in Todo App
    let handleTask=()=>{
        let todoData = document.querySelector(".todo-data").value;
        document.querySelector(".todo-data").value="";
        todoData = todoData.trim().charAt(0).toUpperCase()+ todoData.slice(1);
        
        //what if no task is submitted then no entry
        if(todoData.length>0){
            setTaskList(prevTask=>[...prevTask,todoData]);
            setColors(prevColors => [...prevColors, "black"]); 
        }
    }

    let handleDelete=(key)=>{
       let updated = taskList.filter((_,index)=>{
          return index!==key;
       })
       let updatedColors = colors.filter((_, index) =>{
         index !== key
       })
       setTaskList(updated);
       setColors(updatedColors);
    }

    const handleDone = (key) => {
        const updatedColors = colors.map((color, index) => {
            if (index === key) {
                return "green"; 
            }
            return color;
        });

        setColors(updatedColors);
    }
    //map each array one by one and render inside unorderedlist(ul) and a key which react asks to determine change 
    let datas = taskList.map((ele,index)=> <li key={index} style={{ color: colors[index] }}>
                                           {ele} <div className="action-btn"><button className="btn-done" onClick={()=>handleDone(index)}>Done</button>
                                           <button className="btn-delete" onClick={()=>handleDelete(index)}>Delete</button></div></li>);
   return(
    //main program logic
    <div className="main">
        <h1>Todo-List</h1>
        <div className="content">
            <input type="text" placeholder="Enter Task" className="todo-data"/>
            <button className="btn" onClick={handleTask}>Submit</button>
        </div>
        <ul>
           {datas}
        </ul>
    </div>
   );
}
export default Todo