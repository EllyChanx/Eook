import React from "react";
import { Container, Icon, Image, Divider, Grid, Rating, Popup, Menu } from 'semantic-ui-react'
import BookStoryView from "../views/BookStoryView";
// import PropTypes from 'prop-types';

class SingleBookMenu extends React.Component {

  state = { activeItem: 'Story' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  }
  // the e prevent rerender and allow the {name} to be passed (?)
  // alternatively use arrow function when call and pass the name

  renderBookRGrid = (book) => {
    let bookRGrid;
    switch (this.state.activeItem) {
      case "Story":
        bookRGrid = <BookStoryView bookTitle={ book.title } bookDescription={ book.description } />
        break;
      case "Comments":
        bookRGrid = null
        break;
      case "Quotes":
        bookRGrid = null
    }
    return bookRGrid;
  }

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

  processRating = (book) => {
    return book.goodreads_raiting;
  }

  render() {
    const { activeItem } = this.state
    let book = this.props.bookInfo;
    let openlibCover = this.props.bookCover
    console.log(book);

    return (
      <div>

          <Container id='singlebook-view-container'>
          <Grid columns={2} centered stackable divided id='singlebook-grid'>

            <Grid.Column id='singlebook-grid-left' width={6} >
              <Image  src={ this.processImage(book, openlibCover) }
                      onError={ i => {i.target.src='/images/missingBook.jpg'} }
                      rounded centered id='singlebook-bkcover'/>
              <p id='singlebook-author'> { this.processAuthors(book) } </p>
              <div id='singlebook-rating'>

                <Popup  trigger={(<Rating icon='star' rating={book.goodreads_raiting} maxRating={5} disabled />)}
                        content='Rating from Goodreads' inverted style={{opacity: 0.9}}/> 
                <Popup  trigger={<span> {book.goodreads_raiting} </span>}
                        content='Rating from Goodreads' inverted style={{opacity: 0.9}}/>
              </div>
              
            </Grid.Column>

            <Grid.Column id='singlebook-grid-right' width={10}>
              <Menu tabular inverted color='black' size='large'>
                <Menu.Item name='Story' active={activeItem === 'Story'} onClick={this.handleItemClick} icon='book'/>
                <Menu.Item name='Comments' active={activeItem === 'Comments'} onClick={this.handleItemClick} icon='comments outline'/>
                <Menu.Item name='Quotes' active={activeItem === 'Quotes'} onClick={this.handleItemClick} icon='quote left'/>
              </Menu>
              {this.renderBookRGrid(book)}
            </Grid.Column>
          </Grid>



          </Container>


      </div>
    )
  }
}


export default SingleBookMenu;