import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = () =>
  <div
    style={{
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        padding: '50px 20px',
        maxWidth:'1040'
      }}
    >
    </div>
  </div>

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Memes Against Friends"
      meta={[
        { name: 'description', content: 'The funniest party game you ever played that lets you and your friends compete to create the dankest memes' },
        { name: 'keywords', content: 'game, memes, meme, games, mobile, fun, addicting, party, app, imessage, ios, iphone, against, humanity, friends, card, lol, lmao' },
      ]}
      link={[
        {
          href: "//fonts.googleapis.com/css?family=Roboto",
          rel: "stylesheet"
        }, {
          href: "//fonts.googleapis.com/css?family=Poppins",
          rel: "stylesheet"
        }, {
          href: "//fonts.googleapis.com/css?family=Poppins:bold",
          rel: "stylesheet"
        }, {
          href: "//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
          rel: "stylesheet"
        }
      ]}
    />
    <div>
      {children()}
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
