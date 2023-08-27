import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "@/components/Layout";
import CardLocation from "@/components/CardLocation";
import FilterLocation from "@/components/FilterLocation";

const Location = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filters, setFilters] = useState({ name: "", type: "", dimension: "" });

  const getLocations = async (pageNumber, filters) => {
    const { name, type, dimension } = filters;
    const url = `https://rickandmortyapi.com/api/location/?page=${pageNumber}&name=${name}&type=${type}&dimension=${dimension}`;
    const response = await axios.get(url);
    setData(response.data.results);
    setTotalPages(response.data.info.pages);
    console.log(response.data.results);
  };

  useEffect(() => {
    getLocations(currentPage, filters);
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
    <Layout paginas="Location">
      <div className="flex xl:flex-row flex-col justify-center">
        <div>
          <FilterLocation onFilterChange={handleFilterChange} />
        </div>
        <div>
          <div className="grid grid-cols-3 gap-4 px-4 py-4">
            {data.map((location) => (
              <CardLocation
                key={location.id}
                name={location.name}
                type={location.type}
                dimension={location.dimension}
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
};

export default Location;
