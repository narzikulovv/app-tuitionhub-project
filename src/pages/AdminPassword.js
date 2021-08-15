import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import { login } from "../redux/action/authAction";

const AdminPassword = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [admin, setAdmin] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSetAdmin = (e) => {
    const { name, value } = e.target;
    setAdmin((p) => ({
      ...p,
      [name]: value,
    }));
  };

  const toggleLoading = () => setLoading((p) => !p);

  const handleLogin = async (e) => {
    e.preventDefault();
    toggleLoading();
    const formData = new FormData();
    formData.append("username", admin.username);
    formData.append("password", admin.password);
    formData.append("grant_type", "password");
    try {
      await dispatch(login(formData));
      history.push("/admin/news");
    } catch (error) {
      console.error(error.response.data.error);
    } finally {
      toggleLoading();
    }
  };

  return (
    <div className="admin_password_main">
      <div className="container admin_password_con">
        <div className="row admin_password_row">
          <div className="col-lg-5 col-md-7 col-sm-12 admin_col4">
            <div className="card admin_card">
              <form onSubmit={handleLogin} noValidate autoComplete="off">
                <h1>Tizimga kirish</h1>
                <p>
                  Tizimga faqat ro'yhatdan o'tgan shaxslar kirishi mumkin.
                  Tizimga begonalar kirishi qonunga muvofiq taqiqlanadi
                </p>

                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Login"
                  value={admin.username}
                  onChange={handleSetAdmin}
                />
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={admin.password}
                  onChange={handleSetAdmin}
                />
                {loading ? (
                  <div>Loading...</div>
                ) : (
                  <button type="submit" className="btn btn-success btn-block">
                    Submit
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPassword;
