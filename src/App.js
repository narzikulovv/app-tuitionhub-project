import "./sass/sardor.scss"
import HomePages from "./pages/HomePages";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import AdminPassword from "./pages/AdminPassword";
import AdminPages from "./pages/AdminPages";
import PrivateAdminPages from "./pages/PrivateAdminPages";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={HomePages}/>
            <Route path="/adminpassword" exact component={AdminPassword}/>
            <PrivateAdminPages path="/admin" exact component={AdminPages}/>

            <Route component={NotFound}/>

        </Switch>
    </BrowserRouter>
  );
}

export default App;
