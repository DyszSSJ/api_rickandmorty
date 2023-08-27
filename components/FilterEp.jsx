import React, { useState } from "react";

const FilterEp = ({ onFilterChange }) => {
  const [name, setName] = useState("");
  const [episode, setEpisode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange({ name, episode });
  };

  const handleResetFilters = () => {
    setName("");
    setEpisode("");
    onFilterChange({ name: "", episode: "" });
  };

  return (
    <div className="py-8 px-8">
      <div className="border-4 rounded-lg w-full h-auto p-8">
        <form
          onSubmit={handleSubmit}
          className="flex justify-between flex-col"
        >
          <label className="flex flex-col gap-3 mt-5">
            Nombre:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input text-black"
            />
          </label>
          <label className="flex flex-col gap-3 mt-5">
            Episodio:
            <input
              type="text"
              value={episode}
              onChange={(e) => setEpisode(e.target.value)}
              className="input text-black"
            />
          </label>
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

export default FilterEp;
