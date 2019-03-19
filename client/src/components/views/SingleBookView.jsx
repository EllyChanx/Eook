import React from "react";
import { Container, Icon, Image, Divider, Grid, Header } from 'semantic-ui-react'
// import PropTypes from 'prop-types';

class SingleBookView extends React.Component {

  processAuthors = (book) => {
    let bookAuthors;
    bookAuthors = book.authors.map(
      author => (author.name + "\n")
    )
    return bookAuthors
  }

  processImage = (book, openlibCover) => {
    let bookImage;
    book.isbn.length > 0 ? bookImage = openlibCover : bookImage = book.image;
    return bookImage 
  }

  processDescription = (book) => {
    let bookDescription = book.description.replace(/<br\s*\/?>/ig, "\r\n"); 
    return bookDescription.replace(/<\s*\/?i\s*\/?>/g, "")
  }

  render() {

    let book = this.props.bookInfo;
    let openlibCover = this.props.bookCover
  
    console.log(book);

    return (
      <div>
        
        <p> SingleBookView </p>
          <Container>
          <Grid columns={2} textAlign='center' stackable divided>

            <Grid.Column id='singlebook-grid-left' width={6}>
              <Image  src={ this.processImage(book, openlibCover) }
                      onError={ i => i.target.src='/images/missingBook.jpg' }
                      rounded centered id='singlebook-bkcover'/>
              <p> { this.processAuthors(book) } </p>
              
            </Grid.Column>

            <Grid.Column id='singlebook-grid-right' width={10}>
              <Header as='h2' id='singlebook-title'>{ book.title }</Header>
              <p id='singlebook-discription'> { this.processDescription(book) } </p>
            </Grid.Column>
          </Grid>



          </Container>


      </div>
    )
  }
}

export default SingleBookView;