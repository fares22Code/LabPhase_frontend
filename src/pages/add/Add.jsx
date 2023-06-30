import React, { useReducer, useState } from "react";
import "./Add.scss";
import { serviceReducer, INITIAL_STATE } from "../../reducers/serviceReducer";
import upload from "../../utils/upload";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [state, dispatch] = useReducer(serviceReducer, INITIAL_STATE);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const handleFeature = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_FEATURE",
      payload: e.target[0].value,
    });
    e.target[0].value = "";
  };

  const handleUpload = async () => {
    setUploading(true);
    try {
      const cover = await upload(singleFile);

      const images = await Promise.all(
        [...files].map(async (file) => {
          const url = await upload(file);
          return url;
        })
      );
      setUploading(false);
      dispatch({ type: "ADD_IMAGES", payload: { cover, images } });
    } catch (err) {
      console.log(err);
    }
  };

const navigate = useNavigate();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (service) => {
      return newRequest.post("/services", service);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myServices"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(state);
 navigate("/myServices")
  };

  return (
    <div className="add">
      <div className="container">
        <h1>Add New Service</h1>
        <div className="sections">
          <div className="info">
            <label htmlFor="">Title</label>
            <input
              type="text"
              name="title"
              placeholder="e.g. I will do something I'm really good at"
              required
              onChange={handleChange}
            />
            <label htmlFor="">Category</label>
            <select name="cat" id="cat" required onChange={handleChange}>
              <option value="Graphics & Design">Graphics & Design</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Writing & Translation">Writing & Translation</option>
              <option value="Video & Animation">Video & Animation</option>
              <option value="Music & Audio">Music & Audio</option>
              <option value="Programming & Tech">Programming & Tech</option>
              <option value="Business">Business</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Data">Data</option>
              <option value="Photography">Photography</option>
            </select>
            <div className="images">
              <div className="imagesInputs">
                <label htmlFor="">Cover Image</label>
                <input
                  type="file"
                  required
                  onChange={(e) => setSingleFile(e.target.files[0])}
                />
                <label htmlFor="">Upload Images</label>
                <input
                  type="file"
                  multiple
                  required
                  onChange={(e) => setFiles(e.target.files)}
                />
              </div>
              <button onClick={handleUpload}>
                {uploading ? "uploading" : "Upload"}
              </button>
            </div>
            <label htmlFor="">Description</label>
            <textarea
              name="desc"
              id=""
              placeholder="Brief descriptions to introduce your service to customers"
              cols="0"
              rows="16"
              required
              onChange={handleChange}
            ></textarea>
            <button onClick={handleSubmit}>Create</button>
          </div>
          <div className="details">
            <label htmlFor="">Short Title</label>
            <input
              type="text"
              name="shortTitle"
              placeholder="e.g. One-page web design"
              required
              onChange={handleChange}
            />
            <label htmlFor="">Short Description</label>
            <textarea
              name="shortDesc"
              onChange={handleChange}
              id=""
              placeholder="Short description of your service"
              cols="30"
              required
              rows="10"
            ></textarea>
            <label htmlFor="">Delivery Time (e.g. 3 days)</label> 
             <input type="number" name="deliveryTime"  required onChange={handleChange} />

             <label htmlFor="">Service Status</label>
            <select name="status" id="status"  required onChange={handleChange}>
              <option value="Available">Available</option>
              <option value="Not Available">Not Available</option>
            </select>
           
           
           
           
            <label htmlFor="">Add Features</label>
            <form action="" className="add" onSubmit={handleFeature}>
              <input type="text"  required placeholder="e.g. page design" />
              <button type="submit">add</button>
            </form>
            <div className="addedFeatures">
              {state?.features?.map((f) => (
                <div className="item" key={f}>
                  <button
                    onClick={() =>
                      dispatch({ type: "REMOVE_FEATURE", payload: f })
                    }
                  >
                    {f}
                    <span>X</span>
                  </button>
                </div>
              ))}
            </div>
            <label htmlFor="">Price</label>
            <input type="number" onChange={handleChange}  required name="price" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
