import React, { Component } from "react";
import axios from "axios";
import ".././css/admin.css";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      img: "",
      idCategory: "",
      action: "ADD ITEM",
      id: "",
      items: []
    };

    this.changeTitle = this.changeTitle.bind(this);
    this.changeContent = this.changeContent.bind(this);
    this.changeImg = this.changeImg.bind(this);
    this.changeidCategory = this.changeidCategory.bind(this);
    this.changeSize = this.changeSize.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    axios
      .get(`https://61bc10bdd8542f001782451c.mockapi.io/news`)
      .then((res) => {
        const items = res.data;
        this.setState({ items });
      });
  }
  changeTitle = (e) => {
    this.setState({
      title: e.target.value
    });
  };
  changeContent = (e) => {
    this.setState({
      content: e.target.value
    });
  };
  changeImg = (e) => {
    this.setState({
      img: e.target.value
    });
  };
  changeidCategory = (e) => {
    this.setState({
      idCategory: e.target.value
    });
  };
  changeSize = (e) => {
    this.setState({
      size: e.target.value
    });
  };

  addItem = () => {
    if (this.state.title !== "" && this.state.img !== "") {
      axios({
        method: "POST",
        url: `https://61bc10bdd8542f001782451c.mockapi.io/news/`,
        data: {
          title: this.state.title,
          content: this.state.content,
          img: this.state.img,
          idCategory: this.state.idCategory,
          size: this.state.size
        }
      }).then((res) => {
        this.componentDidMount();
        this.setState({
          title: "",
          content: "",
          img: "",
          idCategory: "",
          size: "",
          id: ""
        });
      });
    }
  };

  Edit = (item, index) => {
    this.setState({
      action: "UPDATE ITEM",
      title: item.title,
      content: item.content,
      img: item.img,
      idCategory: item.idCategory,
      size: item.size,
      index: index,
      id: item.id
    });
  };
  updateItem = () => {
    axios({
      method: "PUT",
      url: `https://61bc10bdd8542f001782451c.mockapi.io/news/${this.state.id}`,
      data: {
        title: this.state.title,
        content: this.state.content,
        img: this.state.img,
        idCategory: this.state.idCategory,
        size: this.state.size
      }
    }).then((res) => {
      this.componentDidMount();
    });
    this.setState({
      title: "",
      content: "",
      img: "",
      idCategory: "",
      size: "",
      action: "ADD_ITEM"
    });
  };

  deleteItem = (item) => {
    axios
      .delete(`https://61bc10bdd8542f001782451c.mockapi.io/news/${item}`)
      .then((res) => {
        this.componentDidMount();
      });
  };
  render() {
    return (
      <div className="container row">
        <div className="formm">
          <h1 className="AddItem">{this.state.action}</h1>
          <div className="row">
            <div className="form-group1">
              <label>TITLE</label>
            </div>
            <div className="form-group2">
              <input
                type="text"
                name=""
                className="form-control"
                onChange={this.changeTitle}
                value={this.state.title}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-group1">
              <label>IMAGES</label>
            </div>
            <div className="form-group2">
              <input
                type="text"
                name=""
                className="form-control"
                onChange={this.changeImages}
                value={this.state.img}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-group1">
              <label>SIZE</label>
            </div>
            <div className="form-group2">
              <input
                type="text"
                name=""
                className="form-control"
                onChange={this.changeSize}
                value={this.state.size}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-group1">
              <label>CONTENT</label>
            </div>
            <div className="form-group2">
              <textarea
                type="text"
                name=""
                rows="2"
                cols="20"
                className="form-control"
                onChange={this.changeContent}
                value={this.state.content}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-group1">
              {" "}
              <label>idCategory</label>
            </div>
            <div className="form-group2">
              <textarea
                type="text"
                name=""
                rows="2"
                cols="20"
                className="form-control"
                onChange={this.changeidCategory}
                value={this.state.idCategory}
              />
            </div>
          </div>
          <div className="form-group">
            <button
              type="button"
              className="btn btn-primary"
              onClick={
                this.state.action === "ADD ITEM"
                  ? this.addItem
                  : this.updateItem
              }
            >
              Submit
            </button>
          </div>
        </div>
        <div className="tablee">
          <h1 className="AddItem">List News</h1>
          <table className="table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Title</th>
                <th>Images</th>
                <th>Decription</th>
                <th>Edit</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {this.state.items.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>
                    <img src={item.img} />
                  </td>
                  <td>{item.content}</td>
                  <td>
                    <button
                      className="badge badge-warning"
                      onClick={() => this.Edit(item, index)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="badge badge-danger"
                      onClick={() => this.deleteItem(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default Admin;
