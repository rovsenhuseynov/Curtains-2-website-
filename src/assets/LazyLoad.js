import React from "react";

const LazyLoad = ({ children }) => {
  return (
    <div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === "img") {
          return React.cloneElement(child, { loading: "lazy" });
        }
        return child;
      })}
    </div>
  );
};

export default LazyLoad;
