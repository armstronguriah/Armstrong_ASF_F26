import {Route, Routes} from 'react-router'
import {SiteNavbar} from "./components/SiteNavbar";
import {ReservationPage} from './pages/ReservationPage.jsx'
import {CartPage} from './pages/CartPage.jsx'
import {MenuPage} from './pages/MenuPage.jsx'
import {HomePage} from './pages/HomePage.jsx'
import {useState} from 'react'

const App = () => {
    const [cart, setCart] = useState([])

    const addToCart = (item, quantity) => {
        setCart((prevCart) => {

            const existingItem = prevCart.find(
                (cartItem) => cartItem.id === item.id
            );

            if (existingItem) {
                return prevCart.map((cartItem) => {
                    if (cartItem.id === item.id) {
                        return {
                            ...cartItem,
                            quantity: Math.min(
                                cartItem.quantity + quantity,
                                5
                            )
                        };
                    }
                    return cartItem;
                });
            }

            return [
                ...prevCart,
                {
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: Math.min(quantity, 5)

                }
            ]
        })
    }

    const clearCart = () => {
        setCart([]);
    };

    return (
        <>
            <SiteNavbar/>

            <Routes>
                <Route path="/"
                       element={<HomePage/>}/>
                <Route path="/menu"
                       element={<MenuPage
                           addToCart={addToCart}/>}/>
                <Route path="/reservations"
                       element={<ReservationPage/>}/>
                <Route path="/cart"
                       element={<CartPage
                           cart={cart}
                           clearCart={clearCart}/>}
                />
            </Routes>
        </>
    )
}

export default App