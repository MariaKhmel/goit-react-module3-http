import { Component } from 'react';
import { ErrorCard } from './ErrorCard';
import { getNews } from './getNews';

class ContentInfo extends Component {
    state = {
        news: null,
        error: '',
        status:'idle'
    };

  componentDidUpdate(prevProps) {
      if (prevProps.searchText !== this.props.searchText) {

          this.setState({ status: 'pending' })
     
      getNews(this.props.searchText)
        .then(res => res.json())
          .then(data => {
              if (data.status === 'ok') {
                  this.setState({ news: data.articles , status:'resolved'})
              }else{
              return Promise.reject(data.message)   
              }
          })
          .catch(error => this.setState({ error, status: 'rejected' }))
          .finally(this.setState({ status: 'idle' }))
    }
  }

  render() {
      const { news, error, status } = this.state;
      if (status === 'pending') return <h2>Loading...</h2>
      else if (status === 'rejected') return <ErrorCard>{this.state.error}</ErrorCard>
      else if (status === 'resolved') return <ul>{news && news.map(el => <li key={el.url}>{el.title}</li>)}</ul>
//      return (
//         <>
//            {/* <h2>Loading...</h2>
//           <ErrorCard>{this.state.error}</ErrorCard>
//         <ul>{news && news.map(el => <li key={el.url}>{el.title}</li>)}</ul> */}
//       </>
//    );
  }
}

export { ContentInfo };
