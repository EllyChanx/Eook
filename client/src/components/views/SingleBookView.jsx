import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

class SingleBookView extends React.Component {

  processAuthors = (book) => {
    let bookAuthors;
    bookAuthors = book.authors.map(
      author => (author.name + "\n")
    )
    return { bookAuthors }
  }

  processImage = (book, openlibCover) => {
    let bookImage;
    book.isbn.length > 0 ? bookImage = openlibCover : bookImage = book.image;
    return { bookImage }
  }

  render() {

    let book = this.props.bookInfo;
    let openlibCover = this.props.bookCover
    let bookCard;
    let test;

    if ( book && openlibCover ) {
      console.log(book);
      const { bookAuthors } = this.processAuthors(book)
      const { bookImage } = this.processImage(book, openlibCover)
      bookCard = <Card  image={bookImage} 
                        onError={i => i.target.src='/images/missingBook.jpg'}
                        // onError={i => i.target.src='https://image.freepik.com/free-vector/design-404-error-page-is-lost-found-message-template-web-page-with-404-error-modern-line-design_6280-165.jpg'}
                        meta={bookAuthors}
                        />

     
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