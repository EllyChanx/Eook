import React, { Component } from 'react';
import { parseString } from "xml2js";
import { Container, Card, Icon, Image} from 'semantic-ui-react';

class Test extends Component {

  constructor(props) {
    super(props);
    this.state = { results: [], };
  }

  componentDidMount() {
    let self = this;
    fetch('/search/index.xml?key='+ process.env.REACT_APP_GOODREAD_API_KEY +'&q=Ender%27s+Game')
      .then((response) => response.text())
        .then((responseText) => {
          parseString(responseText, function (err, result) {
            var data = result.GoodreadsResponse.search[0].results[0].work.map(
              work => ({
                goodreadrating: work.average_rating[0],
                publicationyear: work.original_publication_year[0]._,
                goodreadsId: work.best_book[0].id[0]._,
                title: work.best_book[0].title[0],
                author: work.best_book[0].author[0].name[0],
                covers: work.best_book[0].image_url[0]
              })
            );
            self.setState({ results: data});
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
    const results = this.state.results;
        return (
          <div>
            {results.length
              ?
              results.map(book => {
                return (
                  <Card key={book.goodreadsId} > 
                    <Image src={book.covers} alt='book' size="small"/>
                    <Card.Content>
                      <Card.Header>{book.title}</Card.Header>
                      <Card.Meta>
                        <span>Authur: {book.author}</span>
                      </Card.Meta>
                      <Card.Description>GoodRead Rating: {book.goodreadrating}</Card.Description>
                    </Card.Content>
                  </Card>)
              })
              : <Container textAlign='center'>No Books found.</Container>
            }
          </div>
        )
  }
}

export default Test;


continue to this:
https://stackoverflow.com/questions/48632871/semantic-ui-react-making-a-segment-the-same-height
https://www.goodreads.com/search/index.xml?key=WsrFDuZa7PUVsZH4UgdmUQ&q=Ender%27s+Game
https://www.goodreads.com/api/index#search.books