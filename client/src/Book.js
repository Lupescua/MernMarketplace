import React, {Component} from 'react';

export default class Task extends Component {
    // delete(event) {
    //     alert(event.title);
    //     // console.log(event);
    //     // event.preventDefault(); 
    //     this.delete(event.title); 
    // }
    render() {
        return (
        <React.Fragment>    
        <tr>    
            <td>{this.props.book.title}</td>
            <td>{this.props.book.category}</td>
            <td><button onClick={this.onDelete}> Delete</button></td>  
        </tr>
        </React.Fragment>   
        );
    }
}