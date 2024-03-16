import { NavLink, Link } from "react-router-dom";

const HeaderView = () => {
  return (
    <div className=" d-flex justify-content-between align-items-center p-3">
      <Link to={"/home"} className="d-flex  gap-3 align-items-center ">
        <img height={40} src={"/c-logo.png"} alt="logo" />
        <h5 className="text-light">Coinmania</h5>
      </Link>
      <nav className=" d-flex gap-3 text-light">
        <NavLink className={"text-light"} to={"/"}>
          Giriş Yap
        </NavLink>
        <NavLink className={"text-light"} to={"/home"}>
          Anasayfa
        </NavLink>
      </nav>
    </div>
  );
};

export default HeaderView;
