import React from "react"


const TodoItem = (props) => {
    return <li><input
        type="checkbox" checked={props.todo.completed}
        onChange={() => props.handleChangeProps(props.todo.id)}
    /><button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
            Delete
  </button>{props.todo.title}</li>
}



/*
function TodoItem(props) {
    return <li>{props.todo.title}</li>
}

changes class component to functions

class TodoItem extends React.Component {
    render() {
        return (
            <div>
                <li>{this.props.todo.title}</li>
            </div>
        )
    }
}
*/
export default TodoItem