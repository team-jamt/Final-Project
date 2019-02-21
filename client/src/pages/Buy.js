import React, { Component } from "react";
import ItemCard from "../components/ItemCard";
import Wrapper from "../components/Wrapper";
import saleItems from "../components/saleItems.json";
import "../styles/Collection.css";

class Buy extends Component {
    state = {
        saleItems
    }

    render() {
        return (
            <Wrapper>
                <div className="collection-div" >
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


                        <div className="item-card-div">
                            {this.state.saleItems.map(item => (
                                <ItemCard
                                    id={item.id}
                                    key={item.id}
                                    name={item.name}
                                    image={item.image}
                                    description={item.description}
                                />
                            ))}
                        </div>

                    </div>

                </div>
            </Wrapper>
        );
    }
}
export default Buy;