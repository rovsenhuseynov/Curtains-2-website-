import React, { useEffect } from "react";
import "./NotFound.scss";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {
    // Добавляем класс к body при монтировании компонента
    document.body.classList.add("not-found-page");
    // Убираем класс при размонтировании компонента
    return () => {
      document.body.classList.remove("not-found-page");
    };
  }, []);

  return (
    <div className="not-Found">
      <NavLink to="/" className="not-Found__link">
        <div className="not-Found__question-mark_blog">
          <h1 className="question_mark-title">Page Not Found</h1>
        </div>
        <div className="not-Found__text">
          <div className="text-p">
            <p>Oops! We were unable to find the page you were looking for.</p>
            <p>Please сlick anywhere in the window to go back or try again.</p>
          </div>
          <div className="not-Found__404">
            <p>
              Error Code: <span>404</span>
            </p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default NotFound;
