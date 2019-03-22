import React from "react";
import { Container, Icon, Image, Divider, Grid, Header, Rating, Popup, Menu } from 'semantic-ui-react'
// import PropTypes from 'prop-types';

class SingleBookView extends React.Component {

  state = { activeItem: 'Story' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

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
    // return bookDescription.replace(/<\s*\/?i\s*\/?>/g, "")
    // bookDescription = book.description.replace(/<.*?>/gm, '');
    return bookDescription.replace(/<.*?>/gm, '');
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
        
        <p> SingleBookView </p>
          <Container id='singlebook-view-container'>
          <Grid columns={2} centered stackable divided>

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
              <Header as='h2' id='singlebook-title'>{ book.title }</Header>
              <p id='singlebook-discription'> { this.processDescription(book) } </p>
            </Grid.Column>
          </Grid>



          </Container>


      </div>
    )
  }
}

const colors = [ 'pink' ]

export default SingleBookView;