import React from 'react';

const Todo = props => {
    return (
        <div>
            <div
                className={`task${props.task.completed ? " completed" : ""}`}
                onClick={() => props.toggleTask(props.task.id)}
            >
                <p>{props.task.task}</p>
            </div>
        </div>
    )
}
export default Todo;