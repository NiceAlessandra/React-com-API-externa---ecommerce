import { Switch } from 'react-router-dom';
import './App.css'
import Home from './component/Home';
import Navbar from './component/Navbar';
//import {Switch, Route} from 'react-router-dom';
//import Products from './component/Products';


function App() {
  return (
    <>
      <Navbar />
      <Home/>
    </>
  );
}

export default App;

//código que não consegui rodar com o switch

// function App() {
//   return (
// <>
// <Navbar />
// <Switch>
//   <Route exact path = "/" component = {Home} />
//   <Route exact path = "/products" component = {Products} />
//   <Route exact path = "/products:id" component = {Product} />
// </Switch>
// </>
//  );

// }
// export defaul App;