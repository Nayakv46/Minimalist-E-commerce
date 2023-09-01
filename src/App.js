import "./App.css";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Footer, Navbar } from "./components";

import { Shop, Cart, ProductPage } from './pages';

import { Categories, CategoriesAll, Chairs, Electronics, Furnitures, Kitchen, Lamps, SkinCare } from './pages/Categories';
import ScrollToTop from './utils/ScrollToTop';

import ShopContextProvider from "./context/ShopContext";


const App = () => {

    return (
        <ShopContextProvider>
            <Router>
                <ScrollToTop />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Shop />} />
                    <Route path="/cart" element={<Cart />} />

                    <Route path="/categories" element={<Categories />}>
                        <Route path="/categories/all" element={<CategoriesAll />} />

                        <Route path="/categories/furnitures" element={<Furnitures />} />

                        <Route path="/categories/electronics" element={<Electronics />} />

                        <Route path="/categories/lamps" element={<Lamps />} />

                        <Route path="/categories/kitchen" element={<Kitchen />} />

                        <Route path="/categories/chairs" element={<Chairs />} />

                        <Route path="/categories/skin-care" element={<SkinCare />} />
                    </Route>

                    <Route path="/product/:id" element={<ProductPage />} />
                </Routes>
                <Footer />
            </Router>
        </ShopContextProvider>
    )
}

export default App;