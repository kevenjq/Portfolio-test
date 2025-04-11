import { Link } from "react-router-dom";
import LOGO from "../assets/keven_logo.svg";

export const FixedLogo = () => {
  return (
    <Link to="/">
      <img
        className="absolute p-2 left-8 top-1 cursor-pointer"
        src={LOGO}
        width={"120px"}
      />
    </Link>
  );
};
