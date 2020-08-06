import React from 'react';

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            task: ''
        };
    }

    handleChange = e => {
        this.setState({ task: e.target.value  });
    }

    toggleTask = e => {};

    render(){
        return (
            <form onSubmit={this.toggleTask}>
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