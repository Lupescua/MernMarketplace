import React, { Component } from "react";

export default class Book extends Component {
  render() {
    let book;
    let bookHTML;
    /* Getting category my book belongs to and just need to filter the proper book out of the books array,
      could be simplified by book having category name property and then just filter books based on category name
       but that seems unnecessary for such simple scenario
       
       and as its said in requirements "on creating book user picks from list of categories"
        -> this implies that one book belongs to one category therefore I have went with the solution below
       
       */

    const category = this.props.getBookCategory(this.props.id);
    if (category) {
      book = category.books.filter(book => book._id === this.props.id)[0];
      bookHTML = (
        <div>
          <ul>
            <li>
              <p>
                Title: <b>{book.title}</b>
              </p>
            </li>
            <li>
              <p>
                Category: <b>{category.categoryName}</b>
              </p>
            </li>
            <li>
              <p>
                Title: <b>{book.price}</b>
              </p>
            </li>
            <li>
              <p>
                Author: <b>{book.author}</b>
              </p>
            </li>
            <li>
              <p>
                Seller name: <b>{book.sellerName}</b>
              </p>
            </li>
            <li>
              <p>
                Seller email:{" "}
                <a href={`mailto:${book.sellerEmail}`}>{book.sellerEmail}</a>
              </p>
            </li>
          </ul>
        </div>
      );
    }

    return (
      <>
        <div className="container">
          {bookHTML ? bookHTML : <p>Just a moment I'm loading your book</p>}
        </div>
      </>
    );
  }
}
