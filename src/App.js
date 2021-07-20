
import './App.css';

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from './component/Home/Home';
import Admin from './component/Admin/Admin';
import DashBoard from './component/Admin/DashBoard/DashBoard';

import Footer from './component/Home/Footer/Footer';
function App() {
  const user = null;

  return (

    <div className="App">
      <BrowserRouter>
        <Switch>
        
          <Route exact path="/" component={Home} ></Route>
          <Route exact path="/admin" component={Admin} ></Route>
          <Route exact path="/admin/DashBoard" component={DashBoard} ></Route>
        </Switch>

      </BrowserRouter>
      <Footer/>
    </div>

  );
}

export default App;
