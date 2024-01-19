import React from 'react'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import Gallery from './components/gallery/Gallery'
import History from './components/history/History'
import Nav from './components/nav/Nav'
import Services from './components/services/Services'

const App = () => {
  return (
    <>
    <Nav></Nav>
    <Banner></Banner>
    <History></History>
    <Services></Services>
    <Gallery></Gallery>
    <Footer></Footer>
    </>
  )
}

export default App