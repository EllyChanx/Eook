import React from "react";
// import PropTypes from "prop-types";
import { parseString } from "xml2js";
import { Form, Dropdown } from "semantic-ui-react";

class SearchBookForm extends React.Component {

  constructor() {
    super();
    this.state = {
      query: null,
      loading: false,
      options: []
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSearchChange(event) {
    this.setState({
      query: event.target.value
    }, () => {
      this.fetchQuery();
      console.log(this.state.query);
    });
    // nest in setState to make sure fetch happen later
  }

  fetchQuery() {
    let self = this;
    fetch('/search/index.xml?key='
      + process.env.REACT_APP_GOODREAD_API_KEY 
      + '&q=' + self.state.query )
      .then((response) => {console.log(response);return response.text()})
      .then((responseText) => {
        parseString(responseText, function (err, result) {
          const data = result.GoodreadsResponse.search[0].results[0].work.map(
            work => ({
              key: work.best_book[0].id[0]._,
              image: work.best_book[0].image_url[0],
              text: work.best_book[0].title[0],
              value: work.best_book[0].id[0]._
            })
          );
          self.setState({ options: data});
        });
        })
        .catch((err) => {
            console.log('Error fetching the feed: ', err)
    })
  }

  handleChange(event, data) {
    this.setState({ query: data.value });
    var bookSelect = data.value
    this.props.onBookSelect(bookSelect)
  }

  render() {
    return (
      <div>
        <Form>
          <Dropdown
            fluid
            search
            selection
            placeholder="Search for a book by title"
            loading={this.state.loading}
            options={this.state.options}
            onSearchChange={ this.handleSearchChange }
            onChange={ this.handleChange }
            id="search_bar"
          />
        </Form>
      </div>
    );
  }
}

export default SearchBookForm;
