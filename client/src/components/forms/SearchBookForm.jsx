import React from "react";
import PropTypes from "prop-types";
import { parseString } from "xml2js";
import { Form, Dropdown } from "semantic-ui-react";

class SearchBookForm extends React.Component {

  constructor() {
    super();
    this.state = {
      query: null,
      loading: false,
      options: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
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
    fetch('/search/index.xml?key='+ process.env.REACT_APP_GOODREAD_API_KEY 
      + '&q=' + self.state.query )
      .then((response) => response.text())
      .then((responseText) => {
        parseString(responseText, function (err, result) {
          const data = result.GoodreadsResponse.search[0].results[0].work.map(
            work => ({
              key: work.best_book[0].id[0]._,
              text: work.best_book[0].title[0]
            })
          );
          self.setState({ options: data});
        });
        })
        .catch((err) => {
            console.log('Error fetching the feed: ', err)
    })
  }



  render() {
    const { query, results } = this.state
    return (
      <div>
        <strong>onChange:</strong>
        <pre>{JSON.stringify({ query, results }, null, 2)}</pre>
      
        <Form>
          <Dropdown
            search
            fluid
            selection
            placeholder="Search for a book by title"
            options={this.state.options}
            onSearchChange={ this.handleChange }
          />
        </Form>
      </div>
    );
  }
}

export default SearchBookForm;
