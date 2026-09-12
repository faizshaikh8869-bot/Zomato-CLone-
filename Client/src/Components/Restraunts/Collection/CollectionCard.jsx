import React from "react";
import { useNavigate } from "react-router-dom";

function CollectionCard({ name, places, image, id }) {
  const navigate = useNavigate();

  function handleChange() {
    navigate(`/${name}`);
  }

  return (
    <div
      id={id}
      onClick={handleChange}
      className="group relative w-60 h-72 flex-shrink-0 mr-4 cursor-pointer overflow-hidden rounded-xl"
    >
      {/* Image */}
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Text */}
      <div className="absolute bottom-4 left-4 text-white z-10">
        <h3 className="text-lg font-semibold leading-6">
          {name}
        </h3>

        <p className="mt-1 text-sm text-gray-200">
          {places} places
        </p>
      </div>
    </div>
  );
}

export default React.memo(CollectionCard);