import React, { Component } from 'react';

class Test extends Component {

  constructor(props) {
    super(props);
    this.state = { results: [], };
  }

  componentDidMount() {
    return window.fetch(`https://chitter-backend-api.herokuapp.com/peeps`)
      .then(response => response.json())
      .then(data => this.setState({ results: data}))
      .catch(error => console.log(error))
  }

  render() {
    console.log(this.state.results)
    return (
      <div className="ui container">
       <p> Tasdasdaest </p>
      </div>
    );
  }
}

export default Test;
