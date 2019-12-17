import React, {Component} from 'react';

export default class AddTask extends Component {

    constructor(props) {
        super(props); 

        this.state = { 
            title: "",
            category: ""
        };
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
        this.props.addBook(this.state.title,this.state.category); 
    }

    render() {
        return (
        <tr>
          <td><input type="text" id="itemTitle"onChange={(event) => this.addTitle(event)}/></td>
          <td><input type="text" id="itemCategory" onChange={(event) => this.addCategory(event)}/></td>
          <button onClick={(event) => this.handleButtonClick(event)} type="submit" id="submitItemBtn" >Add Task</button>
        </tr>
        );
    }
}


