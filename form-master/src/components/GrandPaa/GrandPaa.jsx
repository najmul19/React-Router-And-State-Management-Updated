import { createContext, useState } from "react";
import Aunt from "../Aunt/Aunt";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";

import "./GrandPaa.css";

export const AssetContext = createContext("Gold");
export const MoneyContext = createContext(1000);

const GrandPaa = () => {
  const asset = "diamond";
  const [money, setMoney] = useState(1000);
  return (
    <div className="grandpa ">
      <h2>GrandPaa</h2>
      <p>Net Money: {money}</p>

      {
        <MoneyContext.Provider value={[money,setMoney]}>
          <AssetContext.Provider value="gold">
            <section className="flex">
              <Dad asset={asset}></Dad>
              <Uncle></Uncle>
              <Aunt asset={asset}></Aunt>
            </section>
          </AssetContext.Provider>
        </MoneyContext.Provider>
      }
   
    </div>
  );
};

export default GrandPaa;

/**
 * 1. create a context and export
 * 2. Add provider for the context with a value could be anything
 * 3. useContext to acces value in the context api
 */
