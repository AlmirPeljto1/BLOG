//Imports
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/Posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import "./home.css";
import { useLocation } from "react-router-dom";
//HOME PAGE-----------------------------------
const Home = () => {
  //State--------------------------------
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  //--------------------------------------
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};
//Export
export default Home;
