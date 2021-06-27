import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };

    styles = {
        fontSize: 30,
        fontWeight: 'bold'
    };

    renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    
    return <ol>{this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}</ol>
    }

    handleIncrement = () => {
        this.setState({count: this.state.count + 1});        
    }

    handleDecrement = () => {
        this.setState({count: this.state.count - 1});
    }
    

    render() {      

        return (
        
        <div>
            <span style={this.styles} className={this.getClasses()}>{this.showCount()}</span>
            <button onClick={this.handleIncrement} className="btn btn-success btn-lg m-2">Increment</button>
            <button onClick={this.handleDecrement} className="btn btn-danger btn-lg m-2">Decrement</button>
            
        </div>
        );
    }

    showCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }

    getClasses() {
        let constantClasses = "badge m-2 badge-";
        constantClasses += (this.state.count === 0) ? "warning" : "primary";
        return constantClasses;
    }
}
 
export default Counter;