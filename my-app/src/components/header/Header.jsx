//Imports
import "./header.css";
//Component
const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleBlog">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://seolongisland.s3.amazonaws.com/wp-content/uploads/2019/10/24150558/blog-homepage-writing.jpg"
        alt=""
      />
    </div>
  );
};
//Export
export default Header;
