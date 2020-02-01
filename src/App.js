import React, { Component } from "react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import uuid from "uuid";
class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };
  handleChange = e => {
    const value = e.target.value.trim();
    this.setState({
      item: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    
      const newItem = { id: this.state.id, title: this.state.item };
      this.setState({
        items: [...this.state.items, newItem],
        id: uuid(),
        item: "",
        editItem: false
      });
    
  };
  clearList = () => {
    this.setState({
      items: [],
      id: this.state.id,
      item: "",
      editItem: false
    });
  };
  handleEdit = id => {
    const filterItem = this.state.items.filter(item => item.id !== id);
    const item = this.state.items.find(item => item.id === id)
    this.setState({
      items: filterItem,
      id: item.id,
      item: item.title,
      editItem: true
    })
  };
  handleDelete = id => {
    const filterItem = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filterItem
    })
  };
  render() {
    console.log(this.state);  
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              editItem={this.state.editItem}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
