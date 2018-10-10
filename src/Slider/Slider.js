import React from 'react'

const Slider = ({ image }) => {
    const styles = {
      backgroundImage: `url(${image.src})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 60%'
    }
    return <div className="slide" style={styles}>{image.description}</div>
  }

export default Slider