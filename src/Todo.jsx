import { useState } from "react";

function Todo(){
    const[taskList,setTaskList]=useState([]);

    //to add new list in Todo App
    let handleTask=()=>{
        let todoData = document.querySelector(".todo-data").value;
        document.querySelector(".todo-data").value="";
        
        //what if no task is submitted then no entry
        if(todoData.length>0){
            setTaskList(prevTask=>[...prevTask,todoData]);
        }
    }

    //map each array one by one and render inside unorderedlist(ul) and a key which react asks to determine change 
    let datas = taskList.map((ele,index)=> <li key={index}>
                                           {ele} <button>Done</button></li>);
   return(
    //main program logic
    <div className="main">
        <h1>Todo List</h1>
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