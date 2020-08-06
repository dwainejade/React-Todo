import React from 'react';

class TodoForm extends React.Component{
    // Constructor with state
    constructor(){
        super();
        this.state = {
            task: ''
        };
    }

    handleChange = e => {
        // update state with each keystroke
        this.setState({ task: e.target.value });
    };

    // class property to submit form
    submitTask = e => {
        e.preventDefault();
        this.props.addTask(this.state.task);
        this.setState({ tast:'' })
    };

    render(){
        return (
            <form onSubmit={this.submitTask}>
                <input 
                    type='text'
                    name='task'
                    value={this.state.task}
                    onChange={this.handleChange}
                />
                <button>Add</button>
            </form>
        );
    }
}

export default TodoForm;