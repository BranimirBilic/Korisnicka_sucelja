import React from 'react';

const Container = props => (
  <div styles = {containerStyle}
    {...props}  
  />
)

const containerStyle = {
    width: "100%",
    maxWidth: "container",
    margin: "0 auto",
    px: [3, 4, 4],
  }

export default Container
