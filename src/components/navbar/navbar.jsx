import { Link, useLocation } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Navbar() {
  const location = useLocation();

  // FUNCTION TO DETERMINE IF A LINK SHOULD BE ACTIVE
  const isLinkActive = (linkPath) => {
    return location.pathname === linkPath;
  };

  return (
    <nav className="  py-6 bg-[#F3F3F3] font-sans">
      <div className="container flex justify-between items-center">
        <Link to={"/"}>
          <img src="/images/logo.png" className="md:w-36 w-28 md:h-auto" alt="" />
        </Link>

        <div className="flex justify-between items-center">
          <Link
            to={"wish"}
            className={`md:mx-3 mx-2 py-1 text-primary hover:text-sky-700 ${
              isLinkActive("/wish") ? "active-link" : ""
            }`}
          >
            <div className="main-nav__badge relative">
              <FavoriteIcon className={` md:!text-3xl !text-2xl  py-1`} />
              <span className="main-nav__number main-nav__wish-number absolute top-[-5px] right-[-5px]">
                {/* {auth.user.length ? wishProduct.length : 0} */}0
              </span>
            </div>
          </Link>

          <Link
            to={"cart"}
            className={`py-1 text-primary hover:text-sky-700 ${
              isLinkActive("/cart") ? "active-link" : ""
            }`}
          >
            <div className="main-nav__badge flex justify-center items-end">
              <ShoppingCartIcon className={` md:!text-3xl !text-2xl py-1`} />
              <span className="text-sm me-0.5 main-nav__cart-number">
                3{/* {cartProduct.length} */}
              </span>
              /
              <span className="text-sm font-mono ms-0.5 main-nav__cart-total-price fw-bold">
                $400,00
                {/* ${totalPrice ? Number(totalPrice).toFixed(2) : 0.0} */}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
