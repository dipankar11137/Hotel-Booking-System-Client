import React from "react";

const RoomUpdate = () => {
  return (
    <div className="flex justify-center ">
      <div className="stats bg-purple-900 text-primary-content shadow-2xl hover:shadow-inner">
        <div className="stat">
          <div className="stat-title text-purple-50 font-bold text-xl">
            Booked Room
          </div>
          <div className="stat-value text-lime-500">4590</div>
        </div>

        <div className="stat">
          <div className="stat-title text-purple-50 font-bold text-xl">
            Available Rooms
          </div>
          <div className="stat-value text-orange-500">1987</div>
        </div>
      </div>
    </div>
  );
};

export default RoomUpdate;
