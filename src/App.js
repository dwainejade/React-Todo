import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import "./components/Todo.css";

const tasks = [
  {
    task: 'homework',
    id: 1,
    completed: false
  },
  {
    task: 'prep for tomorrows lecture',
    id: 2,
    completed: false
  },
  {
    task: 'take a break',
    id: 3,
    completed: false
  }
]

class App extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      tasks
    };
  }
  
  // Class methods to update state
  toggleTask = taskId => {
    console.log(taskId);
    // In the grocery array, find the task that was clicked
    // (looking for the task with taskId)
    // toggleTask the purchased field on that task
    // Return all other tasks untouched
    this.setState({
      // Build a new state object each time!
      tasks: this.state.tasks.map(task => {
          if (taskId === task.id) {
            return {
              // return the task with purchased field toggled
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
        tasks: [...this.state.tasks, newTask]
      });
    };

render(){
  return (
      <div className='App'>
        <div className='header'>
          <h2>My todo List:</h2>
          <TodoForm />
        </div>
        <TodoList
          tasks={this.state.tasks}
          toggleTask={this.toggleTask}
        />
      </div>
    );
  }
}


export default App;
