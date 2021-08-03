import React from 'react';

const AdminPassword = (props) => {

    const login = (p) => {
        p.preventDefault();

        let login = p.target.login.value;
        let password = p.target.password.value;

        if (login === "Sardor" && password === "5552446"){
            localStorage.setItem("login", login);
            localStorage.setItem("password", password);

            props.history.push("/admin")
        }else {
            alert("Password or login wrong!!!")
        }
    };

    return (
        <div className="admin_password_main">
            <div className="container admin_password_con">
                <div className="row admin_password_row">
                    <div className="col-lg-5 col-md-7 col-sm-12 admin_col4">
                        <div className="card admin_card">
                            <form onSubmit={login}>
                                <h1>Tizimga kirish</h1>
                                <p>Tizimga faqat ro'yhatdan o'tgan shaxslar kirishi mumkin. Tizimga begonalar kirishi
                                    qonunga muvofiq taqiqlanadi</p>

                                <input type="text" className="form-control" name="login" placeholder="Login"/>
                                <input type="password" className="form-control" name="password" placeholder="Password"/>

                                <button type="submit" className="btn btn-success btn-block">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPassword;