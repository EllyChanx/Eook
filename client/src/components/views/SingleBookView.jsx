import React from "react";

class SingleBookView extends React.Component {

  render() {

    const book = this.props.bookInfo;

    console.log(book);
    return (
      <div>
        
        <p> SingleBookView </p>


      </div>
    )
  }
}

export default SingleBookView;