import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null};

  onSearchSubmit = async (term) => {
    console.log(term);

    // call youtube API
    const response = await youtube('/search', {
      params: {
        q: term
      }
    })

    // response.data.items
    // set the first video as selectedVideo by default
    this.setState( {
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = (video) => {
    console.log('From the app!', video);
    this.setState({selectedVideo: video});
  }

  componentDidMount() {
    this.onSearchSubmit('buildings');
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
