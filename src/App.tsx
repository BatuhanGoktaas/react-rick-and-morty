import React, { useState, useEffect } from "react";
import "App.scss";
import Header from "components/header/Header";
import Filter from "components/filter/Filter";
import Card from "components/card/Card";
import { ICharacter } from "interfaces/Character";

function App() {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [fetchedData, updateFetchedData] = useState<ICharacter | null>(null);
  const api: string = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      const data: any = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filter />
          </div>
          <div className="col-8">
            <div className="row">
              <Card results={fetchedData?.results} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
