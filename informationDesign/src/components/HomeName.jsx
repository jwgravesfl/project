import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../assets/IDLogo.png'

var imgStyle ={
  width: '25wh',
  height: '25vh',
}

var divStyle = {
  height: '100%',
  minHeight: '100%'
}

const mymove = keyframes`
0%   {top: 0vh; opacity: 0;}
93% {top: 6vh; opacity: 0,}
94% {top: 5vh; opacity: 1,}
95% {top: 6vh; opacity: .5,}
96% {top: 5vh; opacity: 1,}
97% {top: 6vh; opacity: .5,}
98% {top: 5vh; opacity: 1,}
100% {top: 6vh; opacity: .5,}
101% {top: 5vh; opacity: 1,}
`;

const Information = styled.div`
text-align: center;
font-family: 'Rammetto One';
color: 'white';
font-variant: small-caps;
font-style: italic;
width: 100%;
height: ;
font-size: 10vw;
position: relative;
animation: ${mymove} 6s ease-in-out;
animation-fill-mode: forwards;
padding-top: 10vh;
`;

const Design = styled.div`
text-align: center;
font-family: 'Rammetto One';
color: 'white';
font-variant: small-caps;
font-style: italic;
width: 100%;
height: ;
font-size: 10vw;
position: relative;
animation: ${mymove} 6s ease-in-out;
animation-fill-mode: forwards;
padding-top: 10vh;
`;

export default class HomeName extends Component {
  render() {
    return (
      <div style={divStyle}>
        <Information>Information</Information> 
        <Information><img src={logo} alt="Logo" style={ imgStyle }/> </Information>
        <Design>Design</Design>
      </div>

    )
  }
}