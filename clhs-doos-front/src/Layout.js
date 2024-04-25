import React from "react";
import Header from './Header'; //上面
import Slider from './Slider'; //側邊
import Footer from './Footer'; //下面
import './Layout.css';


const Layout = ({ children, className }) => {
    return (
      <div className={["layout_wrapper", className].join(" ")}>
        <Header />
        <div className="main">
          <Slider />
          <div className="content">{children}</div>
          <Footer />
        </div>
      </div>
    );
  };
  
  export default Layout;

  