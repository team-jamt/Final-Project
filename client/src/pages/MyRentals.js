import React, { Component } from "react";
import API from "../utils/API";
import MyItemCard from "../components/MyItemCard";
import NavTabs from "../components/NavTabs";
import Wrapper from "../components/Wrapper";
import fire from "../config/Fire";

let userEmail

fire.auth().onAuthStateChanged((user) => {
    userEmail = user.email
})

class MyRentals extends Component {
    state = {
        myRentalItems: []
    };

    componentDidMount() {
        this.loadMyRentalItems();
    };

    loadMyRentalItems() {
        API.getMyRentalItems(userEmail)
            .then(res => this.setState({ myRentalItems: res.data }))
            .catch(err => console.log(err));
    };

    deleteRentalItem = id => {
        API.deleteRentalItem(id);
    }

    render() {
        return (
            <Wrapper>
                <NavTabs />
                <div className="collection-div">
                    <h1>My Items for Rent</h1>
                    <h4>Manage your rental items here.</h4>
                    <div className="collection-items-div">
                        <h2>My Rental Items</h2>
                        <div className="item-card-div">
                            {this.state.myRentalItems.map(item => (
                                <MyItemCard
                                    id={item._id}
                                    key={item.id}
                                    name={item.name}
                                    image={item.image}
                                    description={item.description}
                                    price={item.price}
                                    deleteButton={this.deleteRentalItem}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Wrapper>
        )
    }

}

export default MyRentals;