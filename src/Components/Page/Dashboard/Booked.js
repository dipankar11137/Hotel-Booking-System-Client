import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const Booked = () => {
  const id = useParams();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const {
    data: hotel,
    isLoading,
    refetch,
  } = useQuery("hotels", () =>
    fetch(`http://localhost:5000/hotels/${id?.id}`, {
      method: "GET",
      headers: {},
    }).then((res) => res.json())
  );
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <h1>booked : {hotel?.name}</h1>
      <div>
        <form
          className="flex justify-center gap-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-control w-full max-w-xs">
            {/* name */}
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              className="input input-bordered bg-white w-full max-w-xs  "
              {...register("bookerName", { required: true })}
            />
            {errors.bookerName && (
              <span className="text-red-700">Name is required</span>
            )}
            {/* Address */}
            <label className="label">
              <span className="label-text">Your Address</span>
            </label>
            <input
              className="input input-bordered bg-white w-full max-w-xs  "
              {...register("address", { required: true })}
            />
            {errors.address && (
              <span className="text-red-700">Address is required</span>
            )}
            {/* phone */}
            <label className="label">
              <span className="label-text">Phone </span>
            </label>
            <input
              type="phone"
              className="input input-bordered bg-white w-full max-w-xs  "
              {...register("phone", { required: true })}
            />
            {errors.phone && (
              <span className="text-red-700">Phone is required</span>
            )}

            {/*Check in */}
            <label className="label">
              <span className="label-text">Check In Date</span>
            </label>
            <input
              type="date"
              className="input input-bordered bg-white w-full max-w-xs  "
              {...register("checkIn", { required: true })}
            />
            {errors.checkIn && (
              <span className="text-red-700">Date is required</span>
            )}
            {/*Check out */}
            <label className="label">
              <span className="label-text">Check Out Date</span>
            </label>
            <input
              type="date"
              className="input input-bordered bg-white w-full max-w-xs  "
              {...register("checkOut", { required: true })}
            />
            {errors.checkOut && (
              <span className="text-red-700">Date is required </span>
            )}
            {/* hotel name */}
            <input
              value={hotel?.name}
              className="input input-bordered bg-white w-full max-w-xs  hidden"
              {...register("name")}
            />
            <input
              className="bg-indigo-600 py-3 rounded-xl font-bold uppercase cursor-pointer text-white mt-3"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booked;
