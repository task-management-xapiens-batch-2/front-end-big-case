import React from "react";

const LayoutComponent = ({ children }) => {
  return <main style={{ minHeight: "100vh" }}>{children}</main>;
};

export default LayoutComponent;
