import React, { Component } from 'react';
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton';



class Home extends Component {
  render() {
    const styles = {
      parallax: {
          backgroundImage: "url('./public/images/bg-cover.jpg')",
          height: '100%',
          width: '80px',
          margin: '10px',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: '50% 0px',
          padding: '0'
      },
      tagLine: {
        color: 'white',
        fontSize: '20px'
      }
    };

    const style = {
      margin: 12,
    };

    return (
      <section style={{height: "100%"}}>
        <div id='cover'>
          <img src="./public/images/logo.png" />
        </div>
        <h1 style={styles.tagLine}>It Takes A Village</h1>
        <p>Connecting community builders with affordable space to live grow and build.</p>
        <div style={{textAlign: 'center'}}>
          <RaisedButton label="Seekers" primary={true} style={style} />
          <RaisedButton label="Providers" secondary={true} style={style} />
        </div>
      </section>
    )
  }
}

export default Home;
