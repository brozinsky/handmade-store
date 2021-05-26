import './App.scss';
import Menu from './components/Menu/Menu'
import Shop from './components/Shop/Shop'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Menu />
      <div className="wrapper">
        <Shop />
        <Footer />
      </div>
    </>
  );
}

export default App;
