import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer.jsx";
import Hero from "./Components/Hero.jsx";
import CategoryTiles from "./Components/CategoryTiles.jsx";
import SplitPromos from "./Components/SplitPromos.jsx";
import Newsletter from "./Components/Newsletter.jsx";
import CurrentlyTrending from "./Components/CurrentlyTrending.jsx";
import Header from "./Components/Header.jsx";
import Carousels from "./Components/RowCarousel.jsx";
import Login from "./Pages/Login";
import Wishlist from "./Pages/Wishlist";
import Search from "./Pages/Search";
import Cart from "./Pages/Cart";

export default function App() {
  return (
    <HashRouter>
      <div className="pt-[80px]">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <CategoryTiles />
                <CurrentlyTrending />
                <SplitPromos />
                <Carousels />
                <Newsletter />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}
