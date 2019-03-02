import React, { Component } from "react";
// import "../styles/collection.css"
import API from "../utils/API";
import NavTabs from "../components/NavTabs";
import Wrapper from "../components/Wrapper";

class Messages extends Component {

    render() {
        return (
            <Wrapper>
                <NavTabs />
                <div className="collection-div">
                    <h1>Messages</h1>
                    <h4>Manage your messages here.</h4>
                    <div className="under-construction">
                        <img src="http://www.underconstructionfestival.org/wp-content/uploads/2017/10/UnderConstructionFestival-slide-TRK010xprt14.png" />
                    </div>
                </div>
            </Wrapper>
        )
    }

}

export default Messages;