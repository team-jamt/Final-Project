import React, { Component } from "react";
import ItemCard from "../components/ItemCard";
import Wrapper from "../components/Wrapper";
import API from "../utils/API";
import "../styles/Collection.css";
import NavTabs from "../components/NavTabs";

class Buy extends Component {
  state = {
    saleItems: []
  };

  componentDidMount() {
    this.loadSaleItems();
  }

  loadSaleItems = () => {
    API.getSaleItems()
      .then(res => this.setState({ saleItems: res.data }))
      .catch(err => console.log(err));
  };

  buyItem = itemInfo => {
    // console.log("item info: ", itemInfo);
    API.buyItem(itemInfo);
  };

  render() {
    return (
      <Wrapper>
        <NavTabs />
        <div className="collection-div">
          <h1>Buy an Item</h1>
          <h4>Browse our collection of items for sale in your area.</h4>
          <div className="collection-items-div">
            <h2>Items for Sale</h2>
            {/* <ul class="categories">
              <li>All Items</li>
              <li>Cleaning</li>
              <li>Entertainment</li>
              <li>Fitness</li>
              <li>Kitchen</li>
              <li>Miscellaneous</li>
              <li>Tools</li>
              <li>Yard</li>
            </ul> */}

            <div className="item-card-div">
              {this.state.saleItems.map(item => (
                <ItemCard
                  id={item._id}
                  key={item.id}
                  name={item.name}
                  image={item.image}
                  description={item.description}
                  price={item.price}
                  buyButton={this.buyItem}
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
