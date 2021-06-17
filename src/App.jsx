import './App.scss'
import { Route, Switch, useLocation } from "react-router-dom"
import Menu from './components/Menu/Menu'

import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ContactPage from './pages/ContactPage'
import CartPage from './pages/CartPage'
import ProductPage from './pages/ProductPage'
import AboutPage from './pages/AboutPage'

function App() {
  const location = useLocation();

  return (
    <>
      <Menu />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact component={HomePage} />
        <Route path="/sklep" exact component={ShopPage} />
        <Route path="/sklep/:id" component={ProductPage} />
        <Route path="/kontakt" component={ContactPage} />
        <Route path="/o-mnie" component={AboutPage} />
        <Route path="/koszyk" component={CartPage} />
      </Switch>
    </>
  );
}

export default App;
