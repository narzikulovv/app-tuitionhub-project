import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader, Toast } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import AdminPages from "./AdminPages";
import {
  getAllNews,
  addNews,
  editNews,
  deleteNews,
} from "../redux/action/newsAction";

const defObj = {
  titleUz: "",
  titleRu: "",
  titleEn: "",
  descriptionUz: "",
  descriptionRu: "",
  descriptionEn: "",
  image: "",
};

const AdminNews = (props) => {
  const dispatch = useDispatch();
  const { news: list, loading } = useSelector((s) => s.news);

  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [current, setCurrent] = useState(null);
  const [news, setNewS] = useState({
    ...defObj,
  });

  useEffect(() => {
    dispatch(getAllNews());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (edit) {
      setNewS({ ...current });
    } else {
      setNewS({
        ...defObj,
      });
    }
  }, [edit, current]);

  const toggleOpen = () => setOpen((p) => !p);
  const toggleEdit = () => setEdit((p) => !p);

  const handleChangeNews = (e) => {
    const { name, value } = e.target;
    setNewS((p) => ({
      ...p,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("titleUz", news.titleUz);
    formData.append("titleRu", news.titleRu);
    formData.append("titleEn", news.titleEn);
    formData.append("descriptionUz", news.descriptionUz);
    formData.append("descriptionRu", news.descriptionRu);
    formData.append("descriptionEn", news.descriptionEn);
    formData.append("image", news.image);

    try {
      await dispatch(addNews(formData));
      toast.success("Add new news");
      toggleOpen();
      setNewS({
        ...defObj,
      });
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteNews(id));
  };

  const clickEdit = (item) => {
    setCurrent(item);
    toggleEdit();
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("titleUz", news.titleUz);
    formData.append("titleRu", news.titleRu);
    formData.append("titleEn", news.titleEn);
    formData.append("descriptionUz", news.descriptionUz);
    formData.append("descriptionRu", news.descriptionRu);
    formData.append("descriptionEn", news.descriptionEn);
    formData.append("image", news.image);

    try {
      await dispatch(editNews(current.id, formData));
      toast.success("Edited !");
      toggleEdit();
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  return (
    <AdminPages history={props.history}>
      <div className="container">
        <div className="row h-100">
          <div className="col-12">
            <button
                type="button"
                className="btn  ml-auto d-block btn-success"
                onClick={toggleOpen}
            >
              Add news
            </button>
          </div>




          {loading ? (
            <h1 className="text-center">Loading...</h1>
          ) : !list.length ? (
            <h1 className="text-center">Have not news !!!</h1>
          ) : (
            list.map((i, idx) => (
              <div
                key={i.id}
                className="col-4 mt-3 h-100 "
              >
                <div className="card h-100">
                  <div className="card-header p-0">
                    <img
                        src={i.imgUrl}
                        alt="img"
                        className="w-100 "
                        height="300vh"
                    />
                  </div>
                  <div className="card-body">
                    <h4><span>{idx + 1}</span>{i.titleUz}</h4>
                    <p>{i.descriptionUz}</p>
                  </div>
                  <div className="card-footer d-flex align-items-center justify-content-end">
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => handleDelete(i.id)}
                    >
                      delete
                    </button>
                    <button type="button" className="btn btn-danger ml-2" onClick={() => clickEdit(i)}>
                      edit
                    </button>
                  </div>
                </div>

              </div>
            ))
          )}
        </div>

        <Modal isOpen={open || edit} toggle={edit ? toggleEdit : toggleOpen}>
          <AvForm onSubmit={edit ? handleEdit : handleSubmit}>
            <ModalHeader toggle={edit ? toggleEdit : toggleOpen}>
              {edit ? "Edit" : "Add"} News
            </ModalHeader>
            <ModalBody>
              <AvField
                type="text"
                name="titleUz"
                value={news.titleUz}
                onChange={handleChangeNews}
                required
                label="Title (Uz)"
              />
              <AvField
                type="text"
                name="titleRu"
                value={news.titleRu}
                onChange={handleChangeNews}
                required
                label="Title (Ru)"
              />
              <AvField
                type="text"
                name="titleEn"
                value={news.titleEn}
                onChange={handleChangeNews}
                required
                label="Title (En)"
              />
              <AvField
                type="textarea"
                name="descriptionUz"
                value={news.descriptionUz}
                onChange={handleChangeNews}
                required
                label="Description (Uz)"
              />
              <AvField
                type="textarea"
                name="descriptionRu"
                value={news.descriptionRu}
                onChange={handleChangeNews}
                required
                label="Description (Ru)"
              />
              <AvField
                type="textarea"
                name="descriptionEn"
                value={news.descriptionEn}
                onChange={handleChangeNews}
                required
                label="Description (En)"
              />
              <input
                type="file"
                accept=".png, .jpg, .svg, .jpeg"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setNewS((p) => ({
                    ...p,
                    image: file,
                  }));
                }}
              />
            </ModalBody>
            <ModalFooter>
              {loading ? (
                <button
                  type="button"
                  className="btn btn-success ml-auto d-block"
                >
                  Loading...
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn btn-success ml-auto d-block"
                >
                  Save
                </button>
              )}
              <button
                type="button"
                className="btn btn-success  d-block"
                onClick={edit ? toggleEdit : toggleOpen}
              >
                Cancel
              </button>
            </ModalFooter>
          </AvForm>
        </Modal>
      </div>
    </AdminPages>
  );
};

export default AdminNews;
