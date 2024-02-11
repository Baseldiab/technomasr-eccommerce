import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Navbar() {
  return (
    <nav className="  py-6 bg-[#F3F3F3]">
      <div className="container flex justify-between items-center">
        <Link to={"/"}>
          <img src="../../../public/images/logo.png" className="md:w-36 md:h-auto" alt="" />
        </Link>

        <div>
          <Link to={"wish"}>
            <FavoriteIcon className="md:mx-4 mx-2 text-primary" />
          </Link>
          <Link to={"cart"}>
            <ShoppingCartIcon className="text-primary" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
