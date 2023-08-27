import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "@/components/Layout";
import CardPersonajes from "@/components/Card";
import FilterPersonajes from "@/components/FilterPersonajes";

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [isFiltering, setIsFiltering] = useState(false);

  const getData = async (pageNumber) => {
    setLoading(true);
    const url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
    const response = await axios.get(url);
    setData(response.data.results);
    setTotalPages(response.data.info.pages);
    setLoading(false);
    console.log(response.data.results);
  };

  useEffect(() => {
    if (!isFiltering) {
      getData(page);
    }
  }, [page, isFiltering]);

  const handleSearch = (results) => {
    setData(results);
    setTotalPages(Math.ceil(results.length / 20));
    setIsFiltering(true);
  };

  return (
    <Layout paginas="Inicio">
      <div className="flex xl:flex-row flex-col justify-center">
        <div className="px-8">
          <FilterPersonajes
            onSearch={(filteredData) => handleSearch(filteredData)}
            totalPages={totalPages}
            setTotalPages={setTotalPages}
            setIsFiltering={setIsFiltering}
          />
        </div>
        <div className="w-full lg:w-4/6 px-4 py-8 m-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 m-auto px-8">
            {loading ? (
              <div className="mt-8 mb-8 m-auto">
                <div class="🤚">
                  <div class="👉"></div>
                  <div class="👉"></div>
                  <div class="👉"></div>
                  <div class="👉"></div>
                  <div class="🌴"></div>
                  <div class="👍"></div>
                </div>
              </div>
            ) : data.length < 1 ? (
              <p className="font-bold text-center w-fill m-auto">
                No se ha encontrado ningun personaje😢
              </p>
            ) : (
              data.map((item) => (
                <CardPersonajes
                  key={item.id}
                  name={item.name}
                  image={item.image}
                  status={item.status}
                  species={item.species}
                />
              ))
            )}
          </div>
        </div>
      </div>
      {!isFiltering && totalPages > 1 && (
        <div className="mt-8 flex justify-evenly pb-8 items-center">
          <button disabled={page === 1} onClick={() => setPage(page - 1)} className="button">
            Página Anterior
          </button>
          <button onClick={() => setPage(page + 1)} className="button"> Página Siguiente</button>
        </div>
      )}
    </Layout>
  );
};
export default Home;
