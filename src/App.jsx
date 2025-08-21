import { useState } from 'react'
import './App.css'
import Footer from "./Components/Footer.jsx";
import Hero from "./Components/Hero.jsx";
import CategoryTiles from "./Components/CategoryTiles.jsx";
import SplitPromos from "./Components/Splitpromos.jsx";
import Newsletter from "./Components/Newsletter.jsx";
import CurrentlyTrending from "./Components/CurrentlyTrending.jsx";
import Header from "./Components/Header.jsx";
import Carousels from './Components/RowCarousel.jsx';




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="pt-[80px]">
       <Header />
          <Hero />
          <CategoryTiles />
          <CurrentlyTrending />
          <SplitPromos />
          <Carousels />
          <Newsletter />
          <Footer />
    </div>
  )
}

export default App
