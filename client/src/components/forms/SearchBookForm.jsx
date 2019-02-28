import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Form, Dropdown } from "semantic-ui-react";

class SearchBookForm extends React.Component {
  state = {
    loading: false,
    options: [{
      key: 1,
      value: 1,
      text: "first book"
    }, {
      key: 2,
      value: 2,
      text: "second book"
    }],
  };

  render() {
    return (
      <Form>
        <Dropdown
          search
          fluid
          placeholder="Search for a book by title"
          options={this.state.options}
        />
      </Form>
    );
  }
}

export default SearchBookForm;
