import React, { Component } from "react";
import "../styles/Post.css";
import { Input, TextArea, Type, Category } from "../components/PostForm";
import API from "../utils/API";
import Wrapper from "../components/Wrapper";


class Post extends Component {
    state = {
        name: "",
        price: "",
        image: "",
        description: "",
        type: "",
        category: ""
    };

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (!this.state.name || !this.state.price || !this.state.image || !this.state.description || !this.state.type || !this.state.category) {
            alert("Please fill out all the fields.");
        };

        API.postItem({
            name: this.state.name,
            price: this.state.price,
            type: this.state.type,
            category: this.state.category,
            image: this.state.image,
            description: this.state.description
        })
            .then(res => console.log("Successfully Captured Item"))
            .catch(err => console.log(err))

        this.setState({
            name: "",
            price: "",
            type: "",
            category: "",
            image: "",
            description: ""
        })
    }

    render() {
        return (
            <Wrapper>
                <div class="post-item-div">
                    <h1>Post an Item</h1>
                    <h4>
                        Post an item to rent or sell in your area, or request one that you'd like to rent or buy.
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
                                            Link to Image
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
                                                placeholder="Tell us about the item here"
                                            />
                                        </div>
                                    </div>

                                    <button id="post-submit-btn" className="btn" onClick={this.handleFormSubmit}>Post Item</button>

                                </form>
                            </div>


                            <div class="col-sm-6">
                                <img src="https://i.pinimg.com/originals/c4/c2/65/c4c26502099258f61ee9662ea4cf427b.jpg" id="map"></img>
                            </div>
                        </div>

                    </div>
                </div >
            </Wrapper >

        );
    }
}

export default Post;