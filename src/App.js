
import './App.css';

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from './component/Home/Home';
import Admin from './component/Admin/Admin';
import DashBoard from './component/Admin/DashBoard/DashBoard';
import BoardList from './component/Admin/BoardList/BoardList';
function App() {
  const user = null;

  return (

    <div className="">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} ></Route>
          <Route exact path="/admin" component={Admin} ></Route>
          <Route exact path="/admin/DashBoard" component={DashBoard} ></Route>
        </Switch>

      </BrowserRouter>
    </div>

  );
}

export default App;
