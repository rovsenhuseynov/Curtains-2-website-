// import React from "react";
// import { NavLink } from "react-router-dom";
// import "./HeaderNav.scss";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import Logo from "../../../reusable/Logo/Logo";
// import DropDownMenu from "./DropDownMenu/NavDropdownMenu";

// const HeaderNav = () => {
//   const [isOpen, setOpen] = React.useState(false);
//   const [scrollDirection, setScrollDirection] = React.useState("up");
//   const [prevScrollPos, setPrevScrollPos] = React.useState(window.scrollY);

//   const toggleMenu = () => {
//     setOpen(!isOpen);
//   };

//   const handleScroll = React.useCallback(() => {
//     const currentScrollPos = window.scrollY;
//     if (prevScrollPos > currentScrollPos) {
//       setScrollDirection("up");
//     } else {
//       setScrollDirection("down");
//     }
//     setPrevScrollPos(currentScrollPos);
//   }, [prevScrollPos]);

//   React.useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [handleScroll]);

//   return (
//     <div
//       className={`header-nav__wrapper ${
//         scrollDirection === "down" ? "hidden" : ""
//       }`}
//     >
//       <div className="header-nav__content">
//         <Logo />
//         <nav className={`header__nav ${isOpen ? "active" : ""}`}>
//           <div className="header__nav-list">
//             <NavLink
//               to="/"
//               className="header__nav-item"
//               onClick={() => setOpen(false)}
//             >
//               ƏSAS
//             </NavLink>

//             <div className="header__nav-item">
//               <NavLink
//                 to="/curtains"
//                 className="header__nav-item-link"
//                 onClick={() => setOpen(false)}
//               >
//                 PƏRDƏLƏR
//               </NavLink>
//               <DropDownMenu />
//             </div>

//             <NavLink
//               to="/blinds"
//               className="header__nav-item"
//               onClick={() => setOpen(false)}
//             >
//               JALÜZLƏR
//             </NavLink>
            
//             <NavLink
//               to="/bedspreads"
//               className="header__nav-item"
//               onClick={() => setOpen(false)}
//             >
//               YATAQ ÖRTÜYÜ
//             </NavLink>

//             <NavLink
//               to="/accessories"
//               className="header__nav-item"
//               onClick={() => setOpen(false)}
//             >
//               AKSESUARLAR
//             </NavLink>
//           </div>
//         </nav>
//         <button
//           className={`header__menu-btn ${isOpen ? "active" : ""}`}
//           onClick={toggleMenu}
//         >
//           {isOpen ? <CloseIcon /> : <MenuIcon />}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HeaderNav;





import React from "react";
import { NavLink } from "react-router-dom";
import "./HeaderNav.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../../../reusable/Logo/Logo";
import DropDownMenu from "./DropDownMenu/NavDropdownMenu";

const HeaderNav = () => {
  const [isOpen, setOpen] = React.useState(false);
  const [scrollDirection, setScrollDirection] = React.useState("up");
  const [prevScrollPos, setPrevScrollPos] = React.useState(window.scrollY);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const handleScroll = React.useCallback(() => {
    const currentScrollPos = window.scrollY;
    if (prevScrollPos > currentScrollPos) {
      setScrollDirection("up");
    } else {
      setScrollDirection("down");
    }
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className={`header-nav__wrapper ${
        scrollDirection === "down" ? "hidden" : ""
      }`}
    >
      <div className="header-nav__content">
        <Logo />
        <nav className={`header__nav ${isOpen ? "active" : ""}`}>
          <div className="header__nav-list">
            <NavLink
              to="/"
              className="header__nav-item"
              onClick={() => setOpen(false)}
            >
              ƏSAS
            </NavLink>

            <div className="header__nav-item">
              <NavLink
                to="/curtains"
                className="header__nav-item-link"
                onClick={() => setOpen(false)}
              >
                PƏRDƏLƏR
              </NavLink>
              <DropDownMenu onClose={() => setOpen(false)} />
            </div>

            <NavLink
              to="/blinds"
              className="header__nav-item"
              onClick={() => setOpen(false)}
            >
              JALÜZLƏR
            </NavLink>
            
            <NavLink
              to="/bedspreads"
              className="header__nav-item"
              onClick={() => setOpen(false)}
            >
              YATAQ ÖRTÜYÜ
            </NavLink>

            <NavLink
              to="/accessories"
              className="header__nav-item"
              onClick={() => setOpen(false)}
            >
              AKSESUARLAR
            </NavLink>
          </div>
        </nav>
        <button
          className={`header__menu-btn ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </div>
  );
};

export default HeaderNav;