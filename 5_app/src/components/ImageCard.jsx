import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {spans: 0}
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // once rendered
    // i have to add a event listener so ill get the data after they load

    this.imageRef.current.addEventListener("load", this.setSpans);
    console.log(this.imageRef);
  }

  setSpans = () => {
      const height = this.imageRef.current.clientHeight;
      const spans = Math.ceil(height/10);
      this.setState({spans}) // is the same to say spans: spans
  }

  render() {
    return (
      <div style={{
        gridRowEnd : `span ${this.state.spans}`
      }}>
        {/* questo img non è un html dom element, è un jsx element, in questo modo abbiamo un riferimento al dom element */}
        <img
          ref={this.imageRef}
          src={this.props.image.urls.regular}
          alt={this.props.image.description}
        />
      </div>
    );
  }
}

export default ImageCard;
