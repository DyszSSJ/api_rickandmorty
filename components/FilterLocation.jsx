import React, { useState } from "react";

const FilterLocation = ({ onFilterChange }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [dimension, setDimension] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange({ name, type, dimension });
  };

  const handleResetFilters = () => {
    setName("");
    setType("");
    setDimension("");
    onFilterChange({ name: "", type: "", dimension: "" });
  };

  return (
    <div className="py-8 px-8">
      <div className="border-4 rounded-lg w-full h-auto p-8">
        <form
          onSubmit={handleSubmit}
          className="flex justify-between flex-col"
        >
          <div>
            <label className="flex flex-col gap-3 mt-5">
              Nombre:
              <input
                className="input text-black"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="flex flex-col gap-3 mt-5">
              Tipo:
              <input
                className="input text-black"
                type="text"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="flex flex-col gap-3 mt-5">
              Dimensión:
              <input
                className="input"
                type="text"
                value={dimension}
                onChange={(e) => setDimension(e.target.value)}
              />
            </label>
          </div>
          <div className="flex justify-center mt-5 flex-col gap-4">
            <button className="button" type="submit">
              Buscar
            </button>
            <button
              className="button"
              type="button"
              onClick={handleResetFilters}
            >
              Limpiar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterLocation;
