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

class MySales extends Component {
    state = {
        mySaleItems: []
    };

    componentDidMount() {
        this.loadMySaleItems();
    };

    loadMySaleItems() {
        API.getMySaleItems(userEmail)
            .then(res => this.setState({ mySaleItems: res.data }))
            .catch(err => console.log(err));
    };

    deleteSaleItem = id => {
        API.deleteSaleItem(id);
    }

    render() {
        return (
            <Wrapper>
                <NavTabs />
                <div className="collection-div">
                    <h1>My Items for Sale</h1>
                    <h4>Manage your sale items here.</h4>
                    <div className="collection-items-div">
                        <h2>My Sale Items</h2>
                        <div className="item-card-div">
                            {this.state.mySaleItems.map(item => (
                                <MyItemCard
                                    id={item._id}
                                    key={item.id}
                                    name={item.name}
                                    image={item.image}
                                    description={item.description}
                                    price={item.price}
                                    deleteButton={this.deleteSaleItem}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Wrapper>
        )
    }

}

export default MySales;