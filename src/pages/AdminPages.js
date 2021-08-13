import React from 'react';
import {Link} from "react-router-dom"

const AdminPages = (props) => {
    return (
        <div className="admin_layout">
            <div className="admin_layout_left">
                <div className="user_info d-flex justify-content-between align-items-center">
                    <div>
                        <img src="./images/admin-image.jpg" alt=""/>
                    </div>
                    <div>
                        <h5 className="mb-1">Sardorbek Narzikulov</h5>
                        <p>Admin</p>
                    </div>
                </div>
                <div className="menu">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link to="/admin/menus"
                                  className={`nav-link ${props.history.location.pathname === "/admin/menus" ? 'active' : ""}`}>Menu</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin/news"
                                  className={`nav-link ${props.history.location.pathname === "/admin/news" ? 'active' : ""}`}>News</Link>
                        </li>

                    </ul>
                </div>

            </div>
            <div className="admin-layout-right">
                {props.children}
            </div>
        </div>
    );
};

export default AdminPages;