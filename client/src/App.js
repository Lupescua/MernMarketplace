import React, {Component} from 'react';
import './App.css';
// import List from './List'
// import AddBook from "./AddBook";

// const books = [
//   { title: 'Title', category: 'Category' },
//   { title: 'Do laundry', category: 'SF' },
//   { title: 'Clean bedroom', category: 'SF' },
//   { title: 'Bake cake', category: 'SF' },
//   { title: 'Pick up groceries', category: 'business' },
//   { title: 'Post letter', category: 'business' }
// ]

class App extends Component {
  constructor(props) {
    super(props);
    // Ideally, this would be loaded from an API (database)
    this.state = {
      books: [
        { title: 'Title', category: 'Category' },
        { title: 'Do laundry', category: 'SF' },
        { title: 'Clean bedroom', category: 'SF' },
        { title: 'Bake cake', category: 'SF' },
        { title: 'Pick up groceries', category: 'business' },
        { title: 'Post letter', category: 'business' }
      ],
    title: "",
    category: ""
  };
  }

  addBook(title,category) {
      const bookObject = {
        title: title,
        category: category
      };

      // A new state object with a new todoList is set
      this.setState({
          // The new todoList contains all the old items + the new taskObject (...spread syntax)
          books: [...this.state.books, bookObject]
      });
  }  
  addTitle(event) {
    this.setState({
        title: event.target.value 
    });
  }
  addCategory(event) {
      this.setState({
          category: event.target.value 
      });
  }  
 
  handleButtonClick(event) {
    event.preventDefault(); 
    this.addBook(this.state.title,this.state.category); 
  }
  handleDelete() { 
  // handleDelete(event) {
    // alert(event.title);
    alert("yo mama");
    // console.log(event);
    // event.preventDefault(); 
    // this.delete(event.title); 
  }
    // Add book -done
    // Delete book
    // save book
    // validation - do not add empty fields
    // Make category some kind of a dropdown

  render() {
    const tableRows = []
    this.state.books.forEach((book) => {
      tableRows.push(
        <tr>
          <td>{book.title}</td>
          <td>{book.category}</td>
          <td><button onClick={this.onDelete}> Delete</button></td>  
        </tr>
      )
    })
    return (     
      <div className="container">
        <div className="row">
          <div className="col-sm"/>
            <div className="col-sm-8">
              <h4 className="display-4">Book List</h4>
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Category</th>
                  </tr>
                </thead>
                  <tbody>{tableRows}</tbody>
                <thead> 
                  <tr>
                    <td><input type="text" id="itemTitle"onChange={(event) => this.addTitle(event)}/></td>
                    <td><input type="text" id="itemCategory" onChange={(event) => this.addCategory(event)}/></td>
                    <td><button onClick={(event) => this.handleButtonClick(event)} type="submit" id="submitItemBtn" >Add Task</button></td>
                  </tr>
                </thead>   
              </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
