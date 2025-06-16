import React from "react";
import sandra from "../assets/images/sandra.png";

const CollegeDetail = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
      <div className="max-w-full w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={sandra}
          alt="IIT Roorkee"
          className="w-full object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">IIT Roorkee</h1>
          {[...Array(4)].map((_, index) => (
            <p key={index} className="text-gray-700 mb-4">
              DesignHub organized a 3D Modeling Workshop using Blender on 16th
              February at 5 PM. The workshop taught participants the magic of
              creating stunning 3D models and animations using Blender. It was
              suitable for both beginners and experienced users. The event was
              followed by a blender-render competition, which added to the
              excitement.
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollegeDetail;
