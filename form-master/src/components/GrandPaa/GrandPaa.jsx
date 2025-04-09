import Aunt from "../Aunt/Aunt";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";

import "./GrandPaa.css";
const GrandPaa = () => {
  return (
    <div className="grandpa ">
      <h2>GrandPaa</h2>
      <section className="flex">
        <Dad></Dad>
        <Uncle></Uncle>
        <Aunt></Aunt>
      </section>
    </div>
  );
};

export default GrandPaa;
