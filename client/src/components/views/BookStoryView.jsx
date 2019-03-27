import React from "react";
import { Header } from 'semantic-ui-react'

function BookStoryView(props) {
  let rawDesc = props.bookDescription.replace(/<br\s*\/?>/ig, "\r\n");
  let bookDescription = rawDesc.replace(/<.*?>/gm, '');
  return (
    <div>
      <Header as='h2' id='singlebook-title'>{ props.bookTitle }</Header>
      <p id='singlebook-discription'> { bookDescription } </p>
    </div>
  )
}

export default BookStoryView;