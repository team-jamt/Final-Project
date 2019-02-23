
import React, { Component } from "react";
import React from "react";
import "../styles/Post.css";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";


class Items extends Component {
    state = {
      items: [],
      name: "",
      price: 0,
      type: "",
      category: "",
      hyperlink: "",
      description: ""
    };
  
    componentDidMount() {
      this.loadItems();
    }
  
    loadItems = () => {
      API.getItems()
        .then(res =>
          this.setState({ requests: res.data, user: "", item: "", comments: "" })
        )
        .catch(err => console.log(err));
    };
  
    deleteItem = id => {
      API.deleteItem(id)
        .then(res => this.loadItems())
        .catch(err => console.log(err));
    };
  
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
  
    handleFormSubmit = event => {
      console.log(event);
      event.preventDefault();
      if (this.state.item && this.state.user && this.state.comments) {
        API.saveRequest({
          user: this.state.user,
          item: this.state.item,
          comments: this.state.comments
        })
          .then(res => this.loadItems())
          .catch(err => console.log(err));
      }
    };

function Post() {
    return (
        <div class="post-item-div">
            <h1>Post an Item</h1>
            <h4>
                Post an item to rent or sell in your area.
            </h4>
            <div class="form-div">
                <div class="row">
                    <div class="col-sm-12">
                        <h2 class="form-head">Tell Us About Your Item</h2>
                    </div>
                </div>
                <div class="row">

                    <div class="col-sm-6">

                        <form>

                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label for="item-name">Name of Item</label>
                                        <input type="text" class="form-control" id="item-name" />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="form-group">
                                        <label for="item-price">Price</label>
                                        <input type="text" class="form-control" id="item-price" />
                                    </div>
                                </div>

                                <div class="col-sm-4">
                                    <div class="form-group">
                                        <label for="type">Type</label>
                                        <select class="form-control" id="type">
                                            <option>Rent</option>
                                            <option>Sell</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="col-sm-4">
                                    <div class="form-group">
                                        <label for="item-category">Category</label>
                                        <select class="form-control" id="item-category">
                                            <option>Cleaning</option>
                                            <option>Entertainment</option>
                                            <option>Fitness</option>
                                            <option>Kitchen</option>
                                            <option>Miscellaneous</option>
                                            <option>Tools</option>
                                            <option>Yard</option>
                                        </select>
                                    </div>
                                </div>
                            </div>


                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label for="item-img">Link to Image</label>
                                        <input type="text" class="form-control" id="item-img" />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label for="item-description">Description</label>
                                        <textarea class="form-control" id="item-description" rows="4"></textarea>
                                    </div>
                                </div>
                            </div>

                            <FormBtn
                disabled={
                  !(this.state.name && this.state.price && this.state.type && this.state.category)
                }
                onClick={this.handleFormSubmit}
              >
                Post Item
              </FormBtn>

                        </form>
                    </div>


                    <div class="col-sm-6">
                        <img src="https://i.pinimg.com/originals/c4/c2/65/c4c26502099258f61ee9662ea4cf427b.jpg" id="map"></img>
                    </div>
                </div>

            </div>
        </div >

    );
}

export default Post;