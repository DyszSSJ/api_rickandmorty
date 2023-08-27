import React, { useState, useEffect } from "react";
import axios from "axios";

const FilterPersonajes = ({ onSearch, setIsFiltering }) => {
  const [originalData, setOriginalData] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [speciesFilter, setSpeciesFilter] = useState("#");
  const [currentPage, setCurrentPage] = useState(1);

  const getData = async () => {
    let allData = [];
    let nextPage = 1;
    let hasNextPage = true;

    while (hasNextPage) {
      const url = `https://rickandmortyapi.com/api/character/?page=${nextPage}`;
      const response = await axios.get(url);
      allData = allData.concat(response.data.results);
      hasNextPage = response.data.info.next !== null;
      nextPage++;
    }

    setOriginalData(allData);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);

    const filteredData = originalData.filter((character) => {
      const nameMatch =
        character.name.toLowerCase().indexOf(nameFilter.toLowerCase()) !== -1;
      const statusMatch =
        statusFilter === "all" ||
        character.status.toLowerCase() === statusFilter;
      const speciesMatch =
        speciesFilter === "#" ||
        character.species.toLowerCase() === speciesFilter.toLowerCase();

      return nameMatch && statusMatch && speciesMatch;
    });
    onSearch(filteredData);
    setIsFiltering(true);
  };

  const handleClear = () => {
    setNameFilter("");
    setStatusFilter("all");
    setSpeciesFilter("#");
    setCurrentPage(1);
    onSearch(originalData);
    setIsFiltering(false);
  };

  return (
    <>
      <div className="py-8 px-8">
        <div className="border-4 rounded-lg w-full h-auto p-8">
          <h1 className="text-center font-bold text-[1.5rem] mb-5">
            Filtrar Personajes{" "}
          </h1>
          <form action="" onSubmit={handleSubmit} className="flex justify-between flex-col">
            <div className="flex flex-col gap-3 mt-5">
              <label htmlFor="name" className="font-bold">
                Nombre:
              </label>
              <input
                type="text"
                name="text"
                className="input  text-black"
                placeholder="Search!"
                value={nameFilter}
                onChange={(e) => setNameFilter(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-3 mt-5">
              <label htmlFor="status" className="font-bold">
                Estado:
              </label>
              <select
                name="status"
                id="status"
                className="input text-black"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all" disabled>
                  -- Selecciona --
                </option>
                <option value="alive">Vivo</option>
                <option value="dead">Muerto</option>
                <option value="unknown">Desconocido</option>
              </select>
            </div>
            <div className="flex flex-col gap-3 mt-5">
              <label htmlFor="species" className="font-bold">
                Especie:
              </label>
              <select
                name="species"
                id="species"
                className="input text-black"
                value={speciesFilter}
                onChange={(e) => setSpeciesFilter(e.target.value)}
              >
                <option value="#" disabled>
                  -- Selecciona --
                </option>
                <option value="human">Humano</option>
                <option value="alien">Alien</option>
                <option value="humanoid">Humanoide</option>
                <option value="animal">Animal</option>
                <option value="robot">Robot</option>
                <option value="disease">Enfermedad</option>
                <option value="poopybutthole">Poopybutthole</option>
                <option value="cronenberg">Cronenberg</option>
                <option value="unknown">Desconocido</option>
                <option value="dwarf">Enano</option>
                <option value="parasite">Parásito</option>
                <option value="vampire">Vampiro</option>
              </select>
            </div>
            <div className="flex justify-center mt-5 flex-col gap-4">
              <button type="submit" className="button">Buscar</button>
              <button type="button" className="button" onClick={handleClear}>
                Limpiar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FilterPersonajes;
