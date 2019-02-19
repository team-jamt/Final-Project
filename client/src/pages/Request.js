import React, { Component } from "react";
// import SubmitBtn from "../components/SubmitBtn/index";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Requests extends Component {
  state = {
    requests: [],
    user: "",
    item: "",
    comments: ""
  };

  componentDidMount() {
    this.loadRequests();
  }

  loadRequests = () => {
    API.getRequests()
      .then(res =>
        this.setState({ requests: res.data, user: "", item: "", comments: "" })
      )
      .catch(err => console.log(err));
  };

  deleteRequest = id => {
    API.deleteRequest(id)
      .then(res => this.loadRequests())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    console.log(event);
    event.preventDefault();
    if (this.state.item && this.state.user && this.state.comments) {
      API.saveRequest({
        user: this.state.user,
        item: this.state.item,
        comments: this.state.comments
      })
        .then(res => this.loadRequests())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.user}
                onChange={this.handleInputChange}
                name="user"
                placeholder="User (required)"
              />
              <Input
                value={this.state.item}
                onChange={this.handleInputChange}
                name="item"
                placeholder="Item (required)"
              />
              <TextArea
                value={this.state.comments}
                onChange={this.handleInputChange}
                name="comments"
                placeholder="Comments (Optional)"
              />
              <FormBtn
                disabled={
                  !(this.state.item && this.state.user && this.state.comments)
                }
                onClick={this.handleFormSubmit}
              >
                Submit New Request
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>My Requests</h1>
            </Jumbotron>
            {this.state.requests.length ? (
              <List>
                {this.state.requests.map(request => {
                  console.log("toms request", request);
                  return (
                    <ListItem key={request._id}>
                      <Link to={"/requests/" + request._id}>
                        <strong>
                          {request.item} by {request.user}
                        </strong>
                      </Link>
                      <DeleteBtn
                        onClick={() => this.deleteRequest(request._id)}
                      />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Requests;
