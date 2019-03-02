import React, { Component } from "react";
import API from "../utils/API";
import NavTabs from "../components/NavTabs";
import Wrapper from "../components/Wrapper";
import MyRequestsCard from "../components/MyRequestsCard"
import fire from "../config/Fire";

let userEmail

fire.auth().onAuthStateChanged((user) => {
    userEmail = user.email
})

class MyRequests extends Component {
    state = {
        myRequests: []
    };

    componentDidMount() {
        this.loadMyRequests();
    };

    loadMyRequests() {
        API.getMyRequests(userEmail)
            .then(res => this.setState({ myRequests: res.data }))
            .catch(err => console.log(err));
    };

    deleteRequest = id => {
        API.deleteRequest(id);
    };

    render() {
        return (
            <Wrapper>
                <NavTabs />
                <div className="requests-page-div">
                    <h1>My Requests</h1>
                    <h4>Manage your requests here.</h4>
                    <div className="requests-div">
                        <h2>My Requests</h2>
                        <div className="request-card-div">
                            {this.state.myRequests.map(item => (
                                <MyRequestsCard
                                    id={item._id}
                                    key={item.id}
                                    name={item.name}
                                    description={item.description}
                                    type={item.type}
                                    price={item.price}
                                    category={item.category}
                                    deleteButton={this.deleteRequest}
                                    user={item.user}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="footer">
                        <img src="http://www.nutantravels.com/img/footer/footer.png" className="footer-img"></img>
                    </div>
                </div>
            </Wrapper>
        )
    }

}

export default MyRequests;