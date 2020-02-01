import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, editItem, handleSubmit, handleChange } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fa fa-book"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add todo item"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button
            disabled={item?false:true}
            className={editItem? "btn btn-success btn-block mt-3 text-uppercase" : "btn btn-primary btn-block mt-3 text-uppercase"}
            type="submit"
          >
            {editItem? "edit Item" : "add item"}
          </button>
        </form>
      </div>
    );
  }
}
