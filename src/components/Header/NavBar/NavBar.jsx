import { NavLink} from "react-router-dom";

import s from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <>
  <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
          Home
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/Characters" className={({ isActive }) => isActive ? 'active' : ''}>
          Characters
        </NavLink>
      </div>
    </nav>
    </>
  );
};
