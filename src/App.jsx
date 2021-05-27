import './App.scss';
import { Route, Switch, useLocation } from "react-router-dom";
import Menu from './components/Menu/Menu'
import Shop from './components/Shop/Shop'
import Footer from './components/Footer/Footer'

import ShopPage from './pages/ShopPage'
import ContactPage from './pages/ContactPage'
import CartPage from './pages/CartPage'
import ProductPage from './pages/ProductPage'

function App() {
  const location = useLocation();

  return (
    <>
      <Menu />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact component={ShopPage} />
        <Route path="/sklep" exact component={ShopPage} />
        <Route path="/sklep/:id" component={ProductPage} />
        <Route path="/kontakt" component={ContactPage} />
        <Route path="/koszyk" component={CartPage} />
      </Switch>
    </>
  );
}

export default App;
