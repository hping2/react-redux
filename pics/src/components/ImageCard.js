import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0};
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // It shows clientHeight 0 because image not loaded yet.:console.warn();
    //console.log(this.imageRef.current.clientHeight);

    // Vanila callback
    this.imageRef.current.addEventListener('load', this.setSpans )
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    // This from the css file
    const spans = Math.ceil(height / 10);

    console.log(this.imageRef.current.clientHeight + " " + spans);
    this.setState({ spans });
  }

  render() {
    const {description, urls} = this.props.image;

    console.log("This spans value " + Math.ceil(this.state.spans));
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
        <img
          alt={description} src={urls.regular}
          ref={this.imageRef}
        />
      </div>
    )
  }
}

export default ImageCard;
