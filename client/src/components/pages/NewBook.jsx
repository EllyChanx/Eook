import React, { Component } from 'react';
import { parseString } from "xml2js";
// import { Container, Card, Image} from 'semantic-ui-react';
import SearchBookForm from "../forms/SearchBookForm";

class NewBook extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {  };
  // }

  state = {
    bookid: null,
    book: null
  };

  onBookSelect = (book) => {
    this.setState({ bookid: book }, () =>{
      this.fetchBookId(this.state.bookid)
    })
  }

  fetchBookId = (id) => {
    let self = this;
    fetch('/book/show/'
      + this.state.bookid
      + '.json?key='
      + process.env.REACT_APP_GOODREAD_API_KEY)
    .then((response) => response.text())
    .then((responseText) => {
      parseString(responseText, function (err, result) {
        console.log(result.GoodreadsResponse.book)
      })
    })
  }

  render() {
    return (
      <div>
      <SearchBookForm  onBookSelect={this.onBookSelect} />
      </div>
    )
  }
}

export default NewBook;
