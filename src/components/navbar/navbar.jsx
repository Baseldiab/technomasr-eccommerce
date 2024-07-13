import { Link, useLocation } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../../Auth";

export default function Navbar() {
  const location = useLocation();
  const auth = useAuth();

  const cartProduct = useSelector((state) => state.cart) || [];
  const wishProduct = useSelector((state) => state.wish) || [];

  // FUNCTION TO DETERMINE IF A LINK SHOULD BE ACTIVE
  const isLinkActive = (linkPath) => {
    return location.pathname === linkPath;
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Assuming sm is 768px
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="  py-4 sticky top-0 right-0 left-0 z-50 shadow-md bg-[#F3F3F3] font-sans">
      <div className="container flex justify-between items-center">
        <Link to={"/"}>
          <img src="/images/logo.png" className="md:w-36 w-28 min-w-[28] md:h-auto" alt="" />
        </Link>

        <div className="flex justify-between items-center">
          {!isMobile && (
            <>
              <Link
                to={"/"}
                className={`md:mx-3 mx-2  md:text-lg text-sm py-1 uppercase font-medium text-primary hover:text-sky-700 ${
                  isLinkActive("/") ? "active-link" : ""
                }`}
              >
                home
              </Link>
              <Link
                to={"products"}
                className={`md:mx-3 mx-2  md:text-lg text-sm py-1  uppercase font-medium text-primary hover:text-sky-700 ${
                  isLinkActive("/products") ? "active-link" : ""
                }`}
              >
                products
              </Link>
              {auth.user.length === 0 ? (
                <Link
                  to={"login"}
                  className={`md:mx-3 mx-2  md:text-lg text-sm py-1  uppercase font-medium text-primary hover:text-sky-700 ${
                    isLinkActive("/login") ? "active-link" : ""
                  }`}
                >
                  login
                </Link>
              ) : (
                <Link
                  to={"#"}
                  className={`md:mx-3 mx-2  md:text-lg text-sm py-1  uppercase font-medium text-primary hover:text-sky-700`}
                  onClick={() => auth.logout()}
                >
                  Logout
                </Link>
              )}
            </>
          )}

          <Link
            to={"wish"}
            className={`md:mx-3 mx-2 py-1 text-primary hover:text-sky-700 ${
              isLinkActive("/wish") ? "active-link" : ""
            }`}
          >
            <div className="main-nav__badge relative">
              <FavoriteIcon className={` md:!text-3xl !text-2xl  py-1`} />
              {auth.user.length !== 0 && (
                <span className="main-nav__number main-nav__wish-number absolute text-xs top-[-5px] right-[-4px] font-medium">
                  {/* {auth.user.length ? wishProduct.length : 0} */}
                  {wishProduct.length}
                </span>
              )}
            </div>
          </Link>

          <Link
            to={"cart"}
            className={`py-1 text-primary hover:text-sky-700 ${
              isLinkActive("/cart") ? "active-link" : ""
            }`}
          >
            <div className="main-nav__badge flex justify-center items-end relative">
              <ShoppingCartIcon className={` md:!text-3xl !text-2xl py-1`} />
              {auth.user.length !== 0 && (
                <span className="main-nav__number main-nav__wish-number text-xs absolute top-[-5px] right-[-4px] font-medium">
                  {cartProduct.length}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
