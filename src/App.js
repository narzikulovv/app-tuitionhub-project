import "./sass/sardor.scss"
import HomePages from "./pages/HomePages";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import AdminPassword from "./pages/AdminPassword";
import AdminPages from "./pages/AdminPages";
import PrivateAdminPages from "./pages/PrivateAdminPages";
import NotFound from "./pages/NotFound";
import NewsPages from "./pages/NewsPages";
import ProgramsPages from "./pages/ProgramsPages";
import PartnersPages from "./pages/PartnersPages";
import AdminMenus from "./pages/AdminMenus";
import AdminNews from "./pages/AdminNews";


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePages}/>
                <Route path="/adminpassword" exact component={AdminPassword}/>
                <PrivateAdminPages path="/admin" exact component={AdminPages}/>
                <Route path="/news" exact component={NewsPages}/>
                <Route path="/programs" exact component={ProgramsPages}/>
                <Route path="/partners" exact component={PartnersPages}/>
                <Route path="/admin/menus" exact component={AdminMenus}/>
                <Route path="/admin/news" exact component={AdminNews}/>
                <Route component={NotFound}/>

            </Switch>
        </BrowserRouter>
    );
}

export default App;
