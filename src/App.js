import React from 'react';


import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import "./components/Todo.css";

const todos = [
  {
    task: 'Do homework',
    id: 1,
    completed: false
  },
  {
    task: 'Prep for tomorrows lecture',
    id: 2,
    completed: false
  },
  {
    task: 'Take a break',
    id: 3,
    completed: false
  },
  {
    task: "Make dinner",
    id: 4,
    completed: false
  },
  {
    task: "Clean room",
    id: 5,
    completed: false
  },
  {
    task: "Check emails",
    id: 6,
    completed: false
  }
]

class App extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      todos
    };
  }
  
  // Class methods to update state
  toggleTask = taskId => {
    console.log(taskId);
    // In the grocery array, find the task that was clicked
    // (looking for the task with taskId)
    // toggleTask the completed field on that task
    // Return all other todos untouched
    this.setState({
      // Build a new state object each time!
      todos: this.state.todos.map(task => {
          if (taskId === task.id) {
            return {
              // return the task with completed field toggled
              ...task,
              completed: !task.completed
            };
          }
          return task;
        })
      });
    };

    // Class method to add a grocery item
    addTask = task => {
      const newTask = {
        task: task,
        id: Date.now(),
        completed: false
      };
      this.setState({
        todos: [...this.state.todos, newTask]
      });
    };

    clearCompleted = e => {
      e.preventDefault();
      this.setState({
        todos: this.state.todos.filter(task => !task.completed)
      });
    };

render(){
  return (
      <div className='App'>
        <div className='header'>
          <h2>My todo List:</h2>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
          todos={this.state.todos}
          toggleTask={this.toggleTask}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}


export default App;
