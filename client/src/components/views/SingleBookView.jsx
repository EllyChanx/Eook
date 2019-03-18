import React from "react";
import { Container, Card, Icon, Image, Divider, Grid } from 'semantic-ui-react'
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

  render() {

    let book = this.props.bookInfo;
    let openlibCover = this.props.bookCover
  
    console.log(book);

    return (
      <div>
        
        <p> SingleBookView </p>
          <Container>
          <Grid container stackable columns={2} relaxed='very'>
            <Grid.Column id='singlebook-grid-left' floated='left'>
              <Image  src={ this.processImage(book, openlibCover) }
                      onError={ i => i.target.src='/images/missingBook.jpg' }
                      rounded id='singlebook-bkcover'/>
              <p> { this.processAuthors(book) } </p>
              
            </Grid.Column>

            

            <Grid.Column id='singlebook-grid-right' floated='left'>
              <p> info </p>
            </Grid.Column>
          </Grid>

          <Divider vertical fitted >
              <Icon name='book' color='grey'/>
          </Divider>


          </Container>


      </div>
    )
  }
}

export default SingleBookView;