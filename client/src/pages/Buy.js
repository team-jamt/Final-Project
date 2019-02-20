import React from "react";

import "../styles/Collection.css";

function Buy() {

    return (
        <div className="collection-div">
            <h1>Buy an Item</h1>
            <h4>
                Browse our collection of items for sale in your area.
            </h4>
            <div className="collection-items-div">
                <h2>Items for Sale</h2>
                <ul class="categories">
                    <li>All Items</li>
                    <li>Cleaning</li>
                    <li>Entertainment</li>
                    <li>Fitness</li>
                    <li>Kitchen</li>
                    <li>Miscellaneous</li>
                    <li>Tools</li>
                    <li>Yard</li>
                </ul>
                <div class="card" >
                    <img src="https://images-na.ssl-images-amazon.com/images/I/511FsNnJChL._SX425_.jpg" class="card-img-top" alt="mixer" />
                    <div class="card-body">
                        <h5 class="card-title">Example Item</h5>
                        <p class="card-text">This is hard coded text to be a placeholder until the data is rendered dynamically.</p>
                        <a href="https://www.w3schools.com/tags/att_a_href.asp" class="btn btn-primary">More Info</a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Buy;