import React from "react";

import "../css/App.css";
import SearchBar from "./SearchBar";
import Youtube from "../apis/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = {
    videos: [],
    isVisibleCounter: "hidden",
    isVisibleVideoDetails: "hidden",
    selectedVideo: null,
  };

  componentDidMount(){
    this.onTermSubmit('niko pandetta');
  }



  onTermSubmit = async (term) => {
    const response = await Youtube.get("/search", {
      params: {
        q: term,
      },
    });

    // data of videos is in response.data.items
    this.setState({ videos: response.data.items,
      isVisibleCounter: "visible",
    selectedVideo: response.data.items[0]});  // picks the first video as default

  };

  onVideoSelect = (video) => {
    // callback => ES6 arrow function
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit}></SearchBar>
            <div className="ui grid">
              <div className="ui row">
                <div className="eleven wide column">
                  <VideoDetail video={this.state.selectedVideo}></VideoDetail>
                </div>
                <div className="five wide column">
                  <VideoList
                    onVideoSelect={this.onVideoSelect}
                    isVisible={this.state.isVisibleCounter}
                    videos={this.state.videos}></VideoList>{" "}
                  {/* prop-function */}
                </div>
              </div>
            </div>{" "}
          </div>
        </div>

        <div className="App-body"></div>
      </div>
    );
  }
}

export default App;
