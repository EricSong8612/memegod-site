import React, { Component } from 'react'
import Link from 'gatsby-link'
import '../css/master.css'

class IndexPage extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(event) {
    let video = this.refs.vidRef;
    let scrollTop = event.srcElement.body.scrollTop;
    if (scrollTop > 600 && scrollTop < 1100) {
      video.play();
    } else {
      video.pause();
    }
    // console.log(scrollTop);
  }

  render() {
    return(
      <div>
        <header>
          <div id="splashes">
          </div>
          <section id="intro">
            <div className="container-lg">
              <img src="https://s3.amazonaws.com/waverly-marketing-site/maf_logo.png"/>
              <p className="common-BodyText" style={{
                marginTop:'0px',
                color: 'white'
              }}>
                The new and hilarious memes party game you play against your friends through iMessage
              </p>
              <a className="common-Button" href="https://tn95.app.link/BUkrsg616D">
                <span>Download</span><span><i className="fa fa-apple" aria-hidden="true"></i></span>
              </a>
            </div>
          </section>
        </header>

        <div className='slideShow'>
          <section className="app-illustrations">
            <div className='bigPics'>
              <div className="pic">
                <img alt="post" src="https://s3.amazonaws.com/memegod/Website/salt_ba.jpg" width="270px"/>
              </div>
              <div className="pic">
                <img alt="post" src="https://s3.amazonaws.com/memegod/Website/manning_face.jpg" width="270px"/>
              </div>
              <div className="pic">
                <img alt="post" src="https://s3.amazonaws.com/memegod/Website/morpheus.jpg" width="270px"/>
              </div>
              <div className="phone phone-big">
                <img alt="post" src="https://s3.amazonaws.com/waverly-marketing-site/Screenshot+1.png" width="270px"/>
              </div>
              <div className="pic">
                <img alt="post" src="https://s3.amazonaws.com/memegod/Website/joel_osteen.png" width="270px"/>
              </div>
              <div className="pic">
                <img alt="post" src="https://s3.amazonaws.com/memegod/Website/spongebob.jpg" width="270px"/>
              </div>
            </div>
          </section>

          <section className="app-illustrations">
            <div className='smallPics'>
              <div className="pic">
                <img alt="post" src="https://s3.amazonaws.com/memegod/Website/trump.jpg" width="220px"/>
              </div>
              <div className="pic">
                <img alt="post" src="https://s3.amazonaws.com/memegod/Website/spongebob_fish.png" width="220px"/>
              </div>
              <div className="phone phone-small">
                <img alt="post" src="https://s3.amazonaws.com/waverly-marketing-site/Screenshot+2.png" width="220px"/>
              </div>
              <div className="pic">
                <img alt="post" src="https://s3.amazonaws.com/memegod/Website/conspiracy-keanu.jpg" width="220px"/>
              </div>
              <div className="pic">
                <img alt="post" src="https://s3.amazonaws.com/memegod/Website/drake.jpeg" width="220px"/>
              </div>
              <div className="pic">
                <img alt="post" src="https://s3.amazonaws.com/memegod/Website/hotdog.png" width="220px"/>
              </div>
            </div>
          </section>
        </div>

        <div className='videoShow'>
          <h2>HERE'S HOW IT WORKS</h2>

          <div className="phone">
            <video width='250' height='410' poster='https://s3.amazonaws.com/waverly-marketing-site/Screenshot+1.png'
              ref="vidRef" muted loop preload='auto'>
              <source src="https://s3.amazonaws.com/memegod/Website/app_preview.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
           </div>
          <div className='clear'></div>
          <div className='background'></div>
        </div>

        <div className='download'>
          <h3>START A GAME NOW</h3>
          <a className="download-Button" href="https://tn95.app.link/BUkrsg616D">
            <span>Download <i className="fa fa-apple" aria-hidden="true"></i></span>
          </a>
          <div className='bottomBorder'></div>
        </div>

        <div className='copyRight'>
          <p>DESIGNED BY WAVERLY STUDIOS IN NYC</p>
        </div>
      </div>
    )
  }
}

export default IndexPage
