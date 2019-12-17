import React, {Component} from 'react';
import './App.css';
import List from './List'
import AddBook from "./AddBook";


class App extends Component {
  constructor(props) {
    super(props);

    // This is the initial state.
    // Ideally, this would be loaded from an API (database)
    this.state = {
        books: [
          { title: 'Title', category: 'Category' },
          { title: 'Do laundry', category: 'SF' },
          { title: 'Clean bedroom', category: 'SF' },
          { title: 'Bake cake', category: 'SF' },
          { title: 'Pick up groceries', category: 'business' },
          { title: 'Post letter', category: 'business' }
        ]
    };}

    addBook(title) {
        const bookObject = {
          title: title,
          category: "false"
        };

        // A new state object with a new todoList is set
        this.setState({
            // The new todoList contains all the old items + the new taskObject (...spread syntax)
            books: [...this.state.books, bookObject]
        });
    }
    // Add book
    // Delete book
    // Make category some kind of a dropdown

  render() {
    return (     
      <div className="container">
      <div className="row">
          <div className="col-sm"/>
          <div className="col-sm-8">
              <h4 className="display-4">Book List</h4>
              <br/>
              <table>
              <List books={this.state.books}/>
              </table>
              <br/>
              <AddBook addBook={(title) => this.addBook(title)}/>
          </div>
          <div className="col-sm"/>
      </div>
  </div>
  );}
}

export default App;
