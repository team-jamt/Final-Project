import React from "react";
import "../styles/Post.css";


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

                            <div class="row">
                                <div class="col-sm-12">
                                    <a href="https://www.w3schools.com/tags/att_a_href.asp" class="btn btn-primary" id="post-submit-btn">Post Item</a>
                                </div>
                            </div>

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