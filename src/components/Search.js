import { Component } from "react";

class Search extends Component {
    state = {
        value:'',
    } 
    
    handelChange = ({target:{value}}) => {
        this.setState({value})
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.handleInputChange(this.state.value);
        this.setState({ value: '' })
}
    render() { 

        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input type="search" placeholder="Search" aria-label="Search" onChange={this.handelChange} value={this.state.value}/>
                    <button type='submit'>Search</button>
                </form>
            </>
        );
    }
}
 
export {Search};