import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
class App extends React.Component {
  
  state = { images:[] }; // inizializziamo un default array

  onSearchSubmit = async (term) => { // l async prefix ci permette di usare l await nella funzione. Callback function
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    }); // .then to handle response
    this.setState({ images: response.data.results }); // results is an array
  }

  // sudo docker run --detach -v ~/telecom:/output bbb-recorder node export.js "https://davy04.edunova.it/playback/presentation/2.0/playback.html?meetingId=55cacb772dffa93066026c16fc59073f70f75c89-1600174284451" 1.webm 5 false

  // sudo -u bigbluebutton docker-compose run --rm --user 1001:1001 app node index.js -i /var/bigbluebutton/published/presentation/55cacb772dffa93066026c16fc59073f70f75c89-1600174284451 -o /var/bigbluebutton/published/presentation/55cacb772dffa93066026c16fc59073f70f75c89-1600174284451/video.webm

  // sudo -u bigbluebutton docker-compose run --rm --user 998:998 app node index.js -i /var/bigbluebutton/published/presentation/9a9b6536a10b10017f7e849d30a026809852d01f-1597816023148 -o /var/bigbluebutton/published/presentation/9a9b6536a10b10017f7e849d30a026809852d01f-1597816023148/video.mp4

  
  render() {
    return (
      <div>
        <div className="container" style={{ marginTop: "50px" }}>
          {/* style must be a object */}
          <h3>Benvenuto</h3>
          <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
          Found: {this.state.images.length}
          <br></br>
          <ImageList images={this.state.images} ></ImageList>
        </div>
      </div>
    );
  }
}

export default App;
