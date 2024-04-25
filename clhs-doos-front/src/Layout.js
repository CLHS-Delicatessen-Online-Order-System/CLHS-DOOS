import React from "react";

const Layout = ({ children, className }) => {
    return (
      <div className={["layout_wrapper", className].join(" ")}>
        <Sidebar />
        <div className="main">
          <Header />
          <div className="content">{children}</div>
          <Footer />
        </div>
      </div>
    );
  };
  
  export default Layout;