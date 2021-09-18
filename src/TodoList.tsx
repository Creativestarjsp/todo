import React, { FC } from 'react'
interface Props{
    task:any,
    completeTask(taskNameToDelete: string): void;
}
const TodoList:FC<Props>=({ task, completeTask }: Props) => {
    return (
        <div className="conatiner ">
      <div className="row card-u">
<div className="col-1"></div>
        <div className="col-8 card ">
          <span>{task.task}</span>
         
        </div>
        <div className="col-3">
        <button className="btn"
          onClick={() => {
            completeTask(task.task);
          }}
        >
          X
        </button></div>
      </div></div>
    );
  };
export default TodoList;