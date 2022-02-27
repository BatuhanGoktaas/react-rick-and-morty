import React, { useState, useEffect } from "react";
import "App.scss";
import Header from "components/header/Header";
import Filter from "components/filter/Filter";
import Card from "components/card/Card";
import { ICharacter, ICharacterInfo } from "interfaces/Character";
import Pagination from "components/pagination/Pagination";
import Search from "components/search/Search";

function App() {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [fetchedData, updateFetchedData] = useState<ICharacter | null>(null);
  const api: string = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function () {
      const data: any = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div>
      <Header />
      <Search setPageNumber={setPageNumber} search={search} setSearch={setSearch} />
      <div className="container">
        <div className="row">
          <Filter />

          <div className="col-8">
            <div className="row">
              <Card results={fetchedData?.results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} info={fetchedData?.info} />
    </div>
  );
}

export default App;
