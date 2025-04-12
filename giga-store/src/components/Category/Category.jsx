import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <div className="bg-gray-800 p-5 rounded-xl mt-5 shadow-md ">
      <ul className="font-bold space-y-1 bg-gray-900 rounded-xl p-5 lg:divide-y-2  text-gray-400 divide-gray-500 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-1">
        <li>
          <NavLink to="/allproducts">All Prducts</NavLink>
        </li>
        <li>
            <NavLink to='/laptops'>laptops</NavLink>
        </li>
        <li>
            <NavLink to='/phones'>Phones</NavLink>
        </li>
        <li>
            <NavLink to='/accessories'>Accessories</NavLink>
        </li>
        <li>
            <NavLink to='/smartwatch'>Smart wathces</NavLink>
        </li>
        <li>
            <NavLink to='/macbook'>Macbook</NavLink>
        </li>
        <li>
            <NavLink to='/iphone'>Iphone</NavLink>
        </li>
       
      </ul>
    </div>
  );
};

export default Category;
