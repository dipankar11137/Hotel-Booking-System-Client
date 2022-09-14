import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Hotel from "./Hotel";

const Hotels = () => {
  const location = useParams();
  // console.log("param", location);
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/hotels/?${location}`)
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, [hotels]);

  // const {
  //   data: hotels,
  //   isLoading,
  //   refetch,
  // } = useQuery("hotels", () =>
  //   fetch(`http://localhost:5000/hotels`, {
  //     method: "GET",
  //     headers: {},
  //   }).then((res) => res.json())
  // );
  return (
    <div>
      <h1 className="text-center text-3xl  font-bold py-3 uppercase text-blue-600">
        Hotels{" "}
      </h1>
      <div className="sm:px-20 lg:px-44 ">
        {hotels.map((hotel) => (
          <Hotel key={hotel._id} hotel={hotel}></Hotel>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
