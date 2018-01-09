import React from 'react'
import HomeName from './HomeName'

const homeStyle = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  width: '100%',
  minHeight: '100%',
  backgroundColor: '',
  paddingTop: '4em',
};

const Home = () => (
  <div style={homeStyle}>
    <HomeName />
  </div>
)

export default Home