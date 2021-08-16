import React from 'react';
import AdminPages from "./AdminPages";

const AdminMenus = (props) => {
    return (
        <AdminPages history={props.history}>
            <div className="container">
                <div className="row">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi facilis fugit necessitatibus
                        numquam! Ab amet beatae corporis cum distinctio doloremque incidunt magnam, modi officia quas
                        quasi reprehenderit sint temporibus voluptatibus.</p>
                </div>
            </div>
        </AdminPages>
    );
};

export default AdminMenus;