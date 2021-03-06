import React from 'react';
import LoginForm from './../forms/LoginForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from './../actions/auth';

class LoginPage extends React.Component {

  submit = data => 
  this.props.login(data).then(()=>this.props.history.push("/"));
  // login(data) <- pass credentials

  render() {
    return (
      <div>
        <p> LoginPage </p>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

LoginPage.propTypes = {
  history:PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
}

export default connect(null, { login })(LoginPage);