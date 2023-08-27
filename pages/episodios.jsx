import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CradEp from "@/components/CradEp";
import FilterEp from "@/components/FilterEp";

function Episodios() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filters, setFilters] = useState({ name: "", episode: "" });

  const getEpisodes = async (pageNumber, filters) => {
    const { name, episode } = filters;
    const url = `https://rickandmortyapi.com/api/episode/?page=${pageNumber}&name=${name}&episode=${episode}`;
    const response = await axios.get(url);
    setData(response.data.results);
    setTotalPages(response.data.info.pages);
    console.log(response.data.results);
  };

  useEffect(() => {
    getEpisodes(currentPage, filters);
  }, [currentPage, filters]);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  return (
    <Layout paginas="Episodios">
      <div className="flex xl:flex-row flex-col justify-center">
        <div>
          <FilterEp onFilterChange={handleFilterChange} />
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 py-8 px-8">
            {data.map((item) => (
              <CradEp
                key={item.id}
                name={item.name}
                air_date={item.air_date}
                episode={item.episode}
              />
            ))}
          </div>
          <div className="flex justify-center mt-4 gap-4 py-4">
            <button className="button" onClick={handlePrevious}>
              Anterior
            </button>
            <button className="button" onClick={handleNext}>
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Episodios;
