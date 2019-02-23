import React, { Component } from "react";
import API from "../utils/API";
import Wrapper from "../components/Wrapper";
import RequestCard from "../components/RequestCard"
import { Link } from "react-router-dom";
import "../styles/Request.css";

class Requests extends Component {
  state = {
    requestItems: []
  }

  componentDidMount() {
    this.loadRequestItems();
  }

  loadRequestItems = () => {
    API.getRequestItems()
      .then(res =>
        this.setState({ requestItems: res.data })
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Wrapper>
        <div className="requests-page-div">
          <h1>Item Requests</h1>
          <h4>Browse our list of item requests and see if you have something that someone wants.
          </h4>
          <div className="requests-div">
            <h2>Item Requests</h2>
            <div className="request-card-div">
              {this.state.requestItems.map(item => (
                <RequestCard
                  id={item.id}
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  type={item.type}
                  price={item.price}
                  category={item.category}
                  image={item.image}
                />
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default Requests;

