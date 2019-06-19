import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { Form, Input } from "reactstrap";

import { fetchFriends, addFriend } from "./actions/actions";

class Friends extends React.Component {
  state = {
    name: "",
    email: "",
    picture: ""
  };
  render() {
    return (
      <div className="friends-wrapper">
        {this.props.loading ? (
          <div className="loader">
            <Loader type="Grid" color="#fb553b" height={200} width={200} />
          </div>
        ) : (
          <>
            {this.props.friends.map(friend => (
              <div className="card">
                <img
                  className="friend-image"
                  src={friend.image}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h1>{friend.name}</h1>
                  <h3>{friend.email}</h3>
                </div>
              </div>
            ))}
            <Form className="friend-form">
              <div>
                <Input
                  placeholder="Your friend's name"
                  name="name"
                  value={this.state.name}
                  className="login-input"
                  onChange={this.handleChanges}
                />
                <i class="fas fa-fish" />
              </div>
              <div>
                <Input
                  placeholder="Your friend's email"
                  name="email"
                  value={this.state.email}
                  className="login-input"
                  onChange={this.handleChanges}
                />
                <i class="fas fa-envelope" />
              </div>
              <div>
                <Input
                  placeholder="Your friend's picture"
                  name="picture"
                  value={this.state.picture}
                  className="login-input"
                  onChange={this.handleChanges}
                />
                <i class="fas fa-camera" />
              </div>
              <div>
                <div className="btn-login shd" onClick={this.addFriend}>
                  <h3>Make A Friend</h3>
                </div>
                <i class="fas fa-sign-in-alt" />
              </div>
            </Form>
          </>
        )}
      </div>
    );
  }
  componentDidMount() {
    // We need to rescue our friends from the server!
  }

  handleChanges = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addFriend = e => {
    // You're smart. You're good-looking. Walk over to there and start a conversation—metaphorically. With code.
  };
}

const mapStateToProps = state => ({
  friends: state.friends,
  loading: state.loading
});

export default connect(
  mapStateToProps,
  {
    fetchFriends,
    addFriend
  }
)(Friends);
