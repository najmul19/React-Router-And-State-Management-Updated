import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <div>
      <ul>
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
            <NavLink to='/smartwathces'>Smart wathces</NavLink>
        </li>
        <li>
            <NavLink to='/macbook'>Macbook</NavLink>
        </li>
        <li>
            <NavLink to='/iphone'>Iphone</NavLink>
        </li>
        <p>Iphone</p>
      </ul>
    </div>
  );
};

export default Category;
