import React, { Component } from 'react'
import TodoItem from "./TodoItem";
export default class TodoList extends Component {
  render() {
    const {items, clearList, handleEdit, handleDelete} = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>
        {items.map(item =>(<TodoItem key={item.id} item={item} handleDelete={handleDelete}
        handleEdit={handleEdit}/>))}
        <button type="button" className="btn btn-block btn-danger text-capitalize mr-5" onClick={clearList}>clear list</button>
      </ul>
    )
  }
}
