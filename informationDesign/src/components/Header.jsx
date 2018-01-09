import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Responsive } from 'semantic-ui-react'
import { elastic as MobileMenu } from 'react-burger-menu'
import logo from '../assets/IDLogo.png'


var menuItemStyle = {


}

var menuStyle = {
  
}

var headerDivStyle = {
  height: '',

}

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '30px',
    height: '25px',
    margin: '.8em',
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.2)'
  }
}

export default class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      
      <div style={headerDivStyle}>
        <Responsive minWidth={ 768 }>
          
      <Menu 
      fixed={'top'}
      style={menuStyle}>

        <Menu.Item>
           <img src={logo} alt="Logo" />
        </Menu.Item>
        <Menu.Menu
          position='right'
        >
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          style={menuItemStyle}
        >
          <Link to='/'>Home</Link>
        </Menu.Item>

        <Menu.Item
          name='resume'
          active={activeItem === 'resume'}
          onClick={this.handleItemClick}
          style={menuItemStyle}
        >
          <Link to='/resume'>Resume</Link>
        </Menu.Item>
        <Menu.Item
          name='portfolio'
          active={activeItem === 'portfolio'}
          onClick={this.handleItemClick}
          style={menuItemStyle}
        >
          <Link to='/portfolio'>Portfolio</Link>
        </Menu.Item>
        <Menu.Item
          name='portfolio'
          active={activeItem === 'portfolio'}
          onClick={this.handleItemClick}
          style={menuItemStyle}
        >
          <Link to='/contact'>Contact Me</Link>
        </Menu.Item>
        </Menu.Menu>
      </Menu>
      
      </Responsive>
      
      <Responsive maxWidth= { 768 }>
         <Menu
          fixed={'top'}
          >
            <MobileMenu styles={ styles }>
              <a id="home" className="menu-item" href="/">Home</a>
              <a id="resume" className="menu-item" href="/resume">Resume</a>
              <a id="portfolio" className="menu-item" href="/portfolio">Portfolio</a>
              <a id="contact" className="menu-item" href="/contact">Contact Me</a>
            </MobileMenu>
            <Menu.Item position='right'>
              <img src={logo} alt="Logo" />
            </Menu.Item>
        </Menu>
        </Responsive>
      </div>

    )
  }
}