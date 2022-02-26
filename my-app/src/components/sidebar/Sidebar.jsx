//IMPORTS
import { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";
//COMPONENT
const Sidebar = () => {
  //STATE
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("http://localhost:5000/api/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  //--------------------------------------------------------------
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          className="sidebarImg"
          src="https://prabidhilabs.com/wp-content/uploads/2018/06/137-1SpDOB1491876189.jpg"
          alt=""
        />
        <p className="sidebarText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          modi, asperiores.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link className="link" to={`/?cat=${c.name}`}>
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};
//EXPORTS
export default Sidebar;
