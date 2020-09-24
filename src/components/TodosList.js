import React from "react"
import ReactDOM from "react-dom"
import TodoItem from "./TodoItem"

class TodosList extends React.Component {
    render() {
        return (
            <div>
                {this.props.todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        handleChangeProps={this.props.handleChangeProps}
                        deleteTodoProps={this.props.deleteTodoProps}
                    />
                ))}
            </div>
        )
    }
}
export default TodosList 