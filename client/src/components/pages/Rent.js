import React from "react";
import "../../styles/Collection.css"

function Rent() {
    return (
        <div className="collection-div">
            <h1>Rent an Item</h1>
            <h4>
                Browse our collection of items for rent in your area.
            </h4>
            <div className="collection-items-div">
                <h2>Items for Rent</h2>
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
                    <img src="https://images.homedepot-static.com/productImages/a6b29891-8519-47b6-bbb4-bbc1c07aed65/svn/dewalt-table-saws-dwe7490x-64_1000.jpg" class="card-img-top" alt="tablesaw" />
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

export default Rent;