import React from 'react';
import { parseString } from "xml2js";
import Iframe from 'react-iframe';
import SearchBookForm from "../forms/SearchBookForm";
import SingleBookView from "../views/SingleBookView";

class NewBook extends React.Component {

  state = {
    goodreads_id: null,
    book: null,
    openlibCover: null
  };

  onBookSelect = (book) => {
    this.setState({ goodreads_id: book }, () =>{
      this.fetchBookInfo(this.state.goodreads_id);
    })
  }

  getBookCover = (id) => {
    let openlibCover = 'http://covers.openlibrary.org/b/isbn/' + id + '-L.jpg?default=false'
    this.setState( { openlibCover: openlibCover } )
  }

  fetchBookInfo = (id) => {
    let self = this;
    fetch('/book/show/'
      + id
      + '.json?key='
      + process.env.REACT_APP_GOODREAD_API_KEY)
    .then((response) => response.text())
    .then((responseText) => {
      parseString(responseText, function (err, result) {
        console.log(result.GoodreadsResponse.book[0]);
        const fetchData = result.GoodreadsResponse.book[0]
        const book = {
          title: fetchData.title[0],
          authors: fetchData.authors[0].author,
          goodreads_raiting: fetchData.average_rating[0],
          goodreads_link: fetchData.book_links[0],
          description: fetchData.description[0],
          goodreads_id: fetchData.id[0],
          isbn: fetchData.isbn[0],
          isbn13: fetchData.isbn13[0],
          goodreads_url: fetchData.url,
          language: fetchData.language_code[0],
          image: fetchData.image_url[0],
          publication_year: fetchData.publication_year[0],
          publication_month: fetchData.publication_month[0],
          similar_books: fetchData.similar_books[0]? fetchData.similar_books[0] : null,
          // reviews_widget: fetchData.reviews_widget[0]
        }
        self.setState( { book: book });
      })
      self.getBookCover(this.state.book.isbn)
    })
  }

  renderSingleBookView () {
    let { book, openlibCover } = this.state
    let singleBookView;
    if (this.state.book) {
      singleBookView = <SingleBookView bookInfo={ book } bookCover={ openlibCover }/>
    }
    return singleBookView;
  }

  render() {
    return (
      <div>
        <SearchBookForm onBookSelect={this.onBookSelect} />
        {this.renderSingleBookView()}

      </div>
    )
  }
}

export default NewBook;
