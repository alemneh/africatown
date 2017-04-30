import React, { Component } from 'react';


class Home extends Component {
  render() {
    const styles = {
      parallax: {
          backgroundImage: "url('./images/sea_background.jpg')",
          height: '100%',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: '50% 0px',
          padding: '0'
      }
    };

    return (
      <section style={styles.parallax}>

      </section>
    )
  }
}
