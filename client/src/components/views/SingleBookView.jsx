import React from "react";
import { Card, Icon } from 'semantic-ui-react'

class SingleBookView extends React.Component {

  processBookInfo = (book, openlibCover) => {
    let bookImage;
    let bookAuthors;
    book.isbn.length > 0 ? bookImage = openlibCover : bookImage = book.image;
    bookAuthors = book.authors.map(
      author => (author.name + "\n")
    )
    return {bookImage, bookAuthors}
  }

  render() {

    let book = this.props.bookInfo;
    let openlibCover = this.props.bookCover

    let bookCard;

    if ( book && openlibCover ) {
      console.log(book);
      const {bookImage, bookAuthors} = this.processBookInfo(book, openlibCover)

      bookCard = <Card  image={bookImage} 
                        meta={bookAuthors}/>
    } else {
      bookCard = null;
    }

    return (
      <div>
        
        <p> SingleBookView </p>
        { bookCard }

      </div>
    )
  }
}

export default SingleBookView;