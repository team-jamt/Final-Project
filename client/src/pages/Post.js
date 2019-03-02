import React, { Component } from "react";
import "../styles/Post.css";
import { Input, TextArea, Type, Category } from "../components/PostForm";
import API from "../utils/API";
import Wrapper from "../components/Wrapper";
import NavTabs from "../components/NavTabs";
import fire from "../config/Fire";
import Guy from "../styles/photos/Guy.png"

class Post extends Component {
  state = {
    name: "",
    price: "",
    image: "",
    description: "",
    type: "",
    category: "",
    rented: false,
    owner: "",
    user: "",
  };

  componentDidMount() {
    const owner = localStorage.username;
    this.setState({ [owner]: owner });
    fire.auth().onAuthStateChanged((user) => {
      console.log(user.email);
      this.setState({
        user: user.email,
      })
    })
  }

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (
      !this.state.name ||
      !this.state.price ||
      !this.state.description ||
      !this.state.type ||
      !this.state.category
    ) {
      alert("Please fill out all the fields.");
    }

    API.postItem({
      name: this.state.name,
      price: this.state.price,
      type: this.state.type,
      category: this.state.category,
      image: this.state.image,
      description: this.state.description,
      rented: this.state.rented,
      owner: localStorage.username,
      user: this.state.user
    })
      .then(res => console.log("Successfully Captured Item"))
      .catch(err => console.log(err));

    this.setState({
      name: "",
      price: "",
      type: "",
      category: "",
      image: "",
      description: ""
    });
  };

  render() {
    return (
      <Wrapper>
        <NavTabs />
        <div class="post-item-div">
          <h1>Post an Item</h1>
          <h4>
            Post an item to rent or sell in your area, or request one that you'd
            like to rent or buy.
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
                      Name of Item
                      <Input
                        value={this.state.name}
                        name="name"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="My Item"
                      />
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-4">
                      Price
                      <Input
                        value={this.state.price}
                        name="price"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="$20/day"
                      />
                    </div>

                    <div class="col-sm-4">
                      Type
                      <Type
                        value={this.state.type}
                        name="type"
                        onChange={this.handleInputChange}
                      />
                    </div>

                    <div class="col-sm-4">
                      Category
                      <Category
                        value={this.state.category}
                        name="category"
                        onChange={this.handleInputChange}
                      />
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-12">
                      Link to Image (not required)
                      <Input
                        value={this.state.image}
                        name="image"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="https://www.example.com"
                      />
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-12">
                      Description
                      <TextArea
                        value={this.state.description}
                        name="description"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="If requesting an item, please write here if you are looking to rent or buy."
                      />
                    </div>
                  </div>

                  <button
                    id="post-submit-btn"
                    className="btn"
                    onClick={this.handleFormSubmit}
                  >
                    Post Item
                  </button>
                </form>
              </div>

              <div class="col-sm-6">
                <img
                  src={Guy}
                  id="man"
                />
              </div>
            </div>
          </div>
          <div className="footer">
            <img src="http://www.nutantravels.com/img/footer/footer.png" className="footer-img"></img>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default Post;
