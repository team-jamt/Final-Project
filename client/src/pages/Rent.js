import React, { Component } from "react";
import ItemCard from "../components/ItemCard";
import Wrapper from "../components/Wrapper";
// import rentalItems from "../components/rentalItems.json";
import API from "../utils/API";
import "../styles/Collection.css";
import NavTabs from "../components/NavTabs";

class Rent extends Component {
    state = {
        rentalItems: []
    };

    componentDidMount() {
        this.loadRentalItems();
    }

    loadRentalItems = () => {
        API.getRentalItems()
            .then(res =>
                this.setState({ rentalItems: res.data })
            )
            .catch(err => console.log(err));
    }

    render() {

        return (
            <Wrapper>
                <NavTabs />
                <div className="collection-div" >
                    <h1>Rent an Item</h1>
                    <h4>Browse our collection of items for rent in your area.</h4>
                    <div className="collection-items-div">
                        <h2>Items for Rent</h2>
                        <ul className="categories">
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
                            {this.state.rentalItems.map(item => (
                                <ItemCard
                                    id={item.id}
                                    key={item.id}
                                    name={item.name}
                                    image={item.image}
                                    description={item.description}
                                    price={item.price}
                                />
                            ))}
                        </div>
                    </div>

                </div>



            </Wrapper>

        );
    }
}
export default Rent;