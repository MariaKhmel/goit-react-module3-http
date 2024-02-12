import { Component } from "react";
import { Search } from "./Search";
import { ContentInfo } from "./ContentInfo";


export class App extends Component{

  state = {
    searchText:'',
  }

  handleInputChange = searchText => {
    this.setState({searchText})
  
}

  render() {

    return (
      <>
        <Search handleInputChange={this.handleInputChange} />
        <ContentInfo searchText={this.state.searchText} />
      </>
  )
}

}
