import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    const {item, handleDelete, handleEdit} = this.props;
    return (
     <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
       <h6>{item.title}</h6>
       <div className="todo-icon">
         <span className="mx-2 text-success" onClick={()=>handleEdit(item.id)}>
           <i className="fa fa-pencil" aria-hidden="true"></i>
         </span>
         <span className="mx-2 text-danger" onClick={()=>handleDelete(item.id)}>
           <i className="fa fa-trash" aria-hidden="true"></i>
         </span>
       </div>
     </li>
    )
  }
}
