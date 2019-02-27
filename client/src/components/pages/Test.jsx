import React, { Component } from 'react';
import { parseString } from "xml2js";

class Test extends Component {

  constructor(props) {
    super(props);
    this.state = { results: [], };
  }

  componentDidMount() {

    fetch('/search/index.xml?key='+ process.env.REACT_APP_GOODREAD_API_KEY +'&q=Ender%27s+Game')
      .then((response) => response.text())
        .then((responseText) => {
          parseString(responseText, function (err, result) {
            console.log(result.GoodreadsResponse.search[0].results[0].work.map(
              work => ({
                goodreadsId: work.best_book[0].id[0]._,
                title: work.best_book[0].title[0],
                authors: work.best_book[0].author[0].name[0],
                covers: [work.best_book[0].image_url[0]]
              })
            ))
          });
        })
        .catch((err) => {
            console.log('Error fetching the feed: ', err)
    })



    // const url = "/book/review_counts.json?isbns=0441172717%2C0141439602&key=" + process.env.REACT_APP_GOODREAD_API_KEY; // site that doesn’t send Access-Control-*
    // return window.fetch(`${url}`)
    //   .then(response => response.json())
    //   .then(data => this.setState({ results: data}))
    //   .catch(error => console.log(error))
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
