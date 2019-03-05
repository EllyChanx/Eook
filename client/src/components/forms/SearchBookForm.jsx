import React from "react";
import PropTypes from "prop-types";
import { Form, Dropdown } from "semantic-ui-react";

class SearchBookForm extends React.Component {

  constructor() {
    super();
    this.state = {
      query:'',
      loading: false,
      options: [
      // {
      //   key: 1,
      //   value: 1,
      //   text: "first book"
      // }, {
      //   key: 2,
      //   value: 2,
      //   text: "second book"
      // }
      ],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({query: event.target.value});
  }

  render() {
    const { query, loading } = this.state
    return (
      <div>
        <strong>onChange:</strong>
        {query}
        <pre>{JSON.stringify({ query, loading }, null, 2)}</pre>
      
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
         <input type="text" value={this.state.query} onChange={this.handleChange} />
      </div>
    );
  }
}

export default SearchBookForm;
