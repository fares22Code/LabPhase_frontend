import React from "react";
import { Link } from "react-router-dom";
import "./MyServices.scss";
import getCurrentUser from "../../utils/getCurrentUser";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

function MyServices() {
  const currentUser = getCurrentUser();

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["myServices"],
    queryFn: () =>
      newRequest.get(`/services?userId=${currentUser._id}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.delete(`/services/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myServices"]);
    },
  });

  const handleDelete = (id) => {
    mutation.mutate(id);
  };

  return (
    <div className="myServices">
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
        <div className="container">
          <div className="title">
            <h1>Services</h1>
            {currentUser.isSeller && (
              <Link to="/add">
                <button>Add New Service</button>
              </Link>
            )}
          </div>
          <table>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Sales</th>
              <th>Action</th>
            </tr>
            {data.map((service) => (
              <tr key={service._id}>
                <td>
                  <img className="image" src={service.cover} alt="" />
                </td>
                <td>{service.title}</td>
                <td>{service.price}$</td>
                <td>{service.sales}</td>
                <td>
                  <img
                    className="delete"
                    src="./img/delete.png"
                    alt=""
                    onClick={() => handleDelete(service._id)}
                  />
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
}

export default MyServices;
