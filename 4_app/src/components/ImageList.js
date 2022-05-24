import React from "react";

// RENDERING LIST OF COMPONENTS

const ImageList = (props) => {
  return props.images.map((image) => {  {/* we can also write ({urls,description,urls}) instead of image as parameter */}
    return <img key={image.id} src={image.urls.small} alt={image.description}></img>
        {/* i can also assign the key to the img and return the img */}


     // you can find the object in the chrome inspector analyzing the GET request
  });
};

export default ImageList;
