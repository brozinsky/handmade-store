import './App.scss'
import React from 'react'
import { Route, Switch, useLocation } from "react-router-dom"
import Menu from './components/Menu/Menu'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ContactPage from './pages/ContactPage'
import CartPage from './pages/CartPage'
import ProductPage from './pages/ProductPage'
import AboutPage from './pages/AboutPage'
import { useQuery } from '@apollo/client'
import { GET_PRODUCTS } from './queries/getProducts'
import { ProductDataContext } from './contexts/ProductDataContext';

function App() {
  const location = useLocation();
  const [productData, setProductData] = React.useContext(ProductDataContext)
  const { loading, data } = useQuery(GET_PRODUCTS)

  React.useEffect(() => {
    if (data) {
      setProductData(data.products_products)
      console.log(data)
    }
  }, [data])

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
        <Route component={HomePage} />
      </Switch>
    </>
  );
}

export default App;