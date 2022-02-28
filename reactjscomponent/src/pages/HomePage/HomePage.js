import React, { Component } from 'react'
import Banner from '../../Components/Banner.js'
import Footer from '../../Components/Footer.js'
import Header from '../../Components/Header.js'
import Item from '../../Components/Item.js'

export default class HomePage extends Component {
  render() {
    return (
      <div>
        {/* Header component */}
        <Header/>

        {/* Banner component */}
        <Banner/>
        
        {/* item component */}
        <Item/>

        {/* Footer component */}
        <Footer/>
      </div>
    )
  }
}
