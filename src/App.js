import "./sass/sardor.scss";
import "./sass/elyor.scss";
import HomePages from "./pages/HomePages";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import AdminPassword from "./pages/AdminPassword";
import AdminPages from "./pages/AdminPages";
import PrivateAdminPages from "./pages/PrivateAdminPages";
import NotFound from "./pages/NotFound";
import NewsPages from "./pages/NewsPages";
import ProgramsPages from "./pages/ProgramsPages";
import PartnersPages from "./pages/PartnersPages";
import AdminMenus from "./pages/AdminMenus";
import AdminNews from "./pages/AdminNews";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { userme } from "./redux/action/authAction";
import { config } from "./utils/config";
import ContakPages from "./pages/ContakPages";
import ContackStudent from "./pages/ContackStudent";

function App() {
    const dispatch = useDispatch();
    const token = localStorage.getItem(config.TOKEN);
    const { pathname } = useLocation();

    useEffect(() => {
        if (!token) return;
        dispatch(userme());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    const date1 = new Date("8/16/2021");
    const date2 = new Date();
    console.log(date1);
    console.log(date2);

    // if (date2 > date1) return <h1>Ok ~~~</h1>;

    return (
        <Switch>
            <PrivateAdminPages path="/admin" exact component={AdminPages} />
            <PrivateAdminPages path="/admin/menus" exact component={AdminMenus} />
            <PrivateAdminPages path="/admin/news" exact component={AdminNews} />
            {/* <Route path="/admin/news" exact component={AdminNews} /> */}

            {/*  */}

            <Route path="/" exact component={HomePages} />
            <Route path="/login" exact component={AdminPassword} />
            <Route path="/news" exact component={NewsPages} />
            <Route path="/programs" exact component={ProgramsPages} />
            <Route path="/partners" exact component={PartnersPages} />
            <Route path="/contak" exact component={ContakPages} />
            <Route path="/contak/student" exact component={ContackStudent} />
            <Route path="/contak/partners" exact component={ContackStudent} />



            {/*  */}

            <Route path="/404" component={NotFound} />
            <Redirect to="/404" />
        </Switch>
    );
}

export default App;