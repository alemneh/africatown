import React, { Component } from 'react';
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton';



class Home extends Component {
  render() {
    const styles = {
      image: {
        background: 'url(./public/images/bg-cover.jpg)',
        backgroundAttachment: 'fixed',
        backgroundPosition: '50% 0',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
         WebkitBackgroundSize: 'cover',
         MozBackgroundSize: 'cover',
         OBackgroundSize: 'cover',
         BackgroundSize: 'cover',
         height: '100%'
      },
      tagLine: {
        color: 'white',
        fontSize: '72px'

      },
      tagLineContainer: {
        textAlign: 'center'
      },
      logo: {
        marginLeft: '25px',
        marginTop: '25px'
      },
      p: {
        fontSize: '24px',
        color: 'white'
      }
    };

    const style = {
      margin: 12,
    };

    return (
      <section style={styles.image}>
        <div >
          <img style={styles.logo} src="./public/images/logo.png" />
        </div>
        <div style={styles.tagLineContainer}>
          <h1 style={styles.tagLine}>It Takes A Village</h1>
          <p style={styles.p}>Connecting community builders with affordable space to live grow and build.</p>
        </div>
        <div style={{textAlign: 'center'}}>
          <Link to="/properties-list"><RaisedButton label="Seekers" primary={true} style={style} /></Link>
          <Link to="/add-property"><RaisedButton label="Providers" secondary={true} style={style} /></Link>
        </div>
        <form name="myForm" action="/files"  method="post" enctype="multipart/form-data">
          <input type="file"  name="propertyImage"/>
          <button type="submit">Upload</button>
        </form>
      </section>
    )
  }
}

export default Home;
