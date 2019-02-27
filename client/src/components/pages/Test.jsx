import React, { Component } from 'react';

class Test extends Component {

  constructor(props) {
    super(props);
    this.state = { results: [], };
  }

  componentDidMount() {
    const url = "/book/review_counts.json?isbns=0441172717%2C0141439602&key=" + process.env.REACT_APP_GOODREAD_API_KEY; // site that doesn’t send Access-Control-*
    return window.fetch(`${url}`)
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
