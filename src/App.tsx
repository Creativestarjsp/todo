import React, { ChangeEvent, FC,useState } from 'react'
import TodoList from './TodoList'
interface TProps {
  task:string
}
const App:FC=()=> {
  const [task,setTask]=useState<string>("");
  const [todo,setTodo]=useState<TProps[]>([]);


  const handleChange =(event:ChangeEvent<HTMLInputElement>):void=>{
    setTask(event.target.value);
  }
  const addTask=():void=>{
    const newTask ={task:task}
    setTodo([...todo,newTask]);
    console.log(task)
    console.log(todo)
    setTask("");
  }

  const completeTask = (taskNameToDelete: string): void => {
    setTodo(
      todo.filter((task) => {
        return task.task != taskNameToDelete;
      })
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">

        </div>
        <div className="col-md-6">
          <h1>TODO APP</h1>
          <input
          className="form-control"
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={handleChange}
          />
          <button  className="btn btn-success btn-u" onClick={addTask}>Add Task</button>
          <hr/>
          <div className="">
            

{todo.map((task: TProps, key: number) => {
          return <TodoList key={key} task={task} completeTask={completeTask} />;
        })}
        
          </div>
          </div>
          <div className="col-md-3">
          
          </div>
      </div>
      
    </div>
  )
}

export default App;

