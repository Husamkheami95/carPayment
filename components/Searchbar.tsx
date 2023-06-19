"use client";

import { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";

const Searchbar = () => {
  const handelSearch = () => {};
  const [manueFacture, setManueFacture] = useState("");
  return (
    <form className="searchbar" onSubmit={handelSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manueFacture}
          setManuFacturer={setManueFacture}
        />
      </div>
    </form>
  );
};

export default Searchbar;
