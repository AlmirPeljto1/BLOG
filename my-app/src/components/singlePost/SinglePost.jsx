//IMPORTS
import "./singlePost.css";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";
//COMPONENT
const SinglePost = () => {
  //USER--------------
  const { user } = useContext(Context);
  //STATE-----------------------------------
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:5000/api/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);
  //----------------------------------------------
  //HANDLERS----------------------------------------
  const handleDelete = async () => {
    try {
      await axios.delete("http://localhost:5000/api/posts/" + path, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (error) {}
  };
  const handleUpdate = async () => {
    try {
      await axios.put("http://localhost:5000/api/posts/" + path, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (error) {}
  };
  //---------------------------------------------------------------------
  //STORAGE-----------------------------
  const PF = "http://localhost:5000/images/";

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}

        <div className="singlePostInfo">
          <span>
            Autor:
            <Link className="link" to={`/?user=${post.username}`}>
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostPInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostP">{desc}</p>
        )}
        {updateMode && (
          <button className="singlePostBtn" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
};
//EXPORTS
export default SinglePost;
