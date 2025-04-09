import { createContext } from "react";
import Aunt from "../Aunt/Aunt";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";

import "./GrandPaa.css";

const AssetContext = createContext("Gold");

const GrandPaa = () => {
  const asset = "diamond";
  return (
    <div className="grandpa ">
      <h2>GrandPaa</h2>
      <AssetContext.Provider value="gold">
        <section className="flex">
          <Dad asset={asset}></Dad>
          <Uncle></Uncle>
          <Aunt asset={asset}></Aunt>
        </section>
      </AssetContext.Provider>
    </div>
  );
};

export default GrandPaa;

/**
 * 1. create a context and export
 * 2. Add provider for the context with a value
 */
