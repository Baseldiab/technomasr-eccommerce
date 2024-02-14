import { Link, useLocation } from "react-router-dom";

export default function BottomNavbar() {
  const location = useLocation();

  // FUNCTION TO DETERMINE IF A LINK SHOULD BE ACTIVE
  const isLinkActive = (linkPath) => {
    return location.pathname === linkPath;
  };

  return (
    <nav className="bg-[#F3F3F3] font-sans fixed bottom-0 right-0 left-0 py-2 px-4 sm:hidden flex justify-between items-center z-50 h-[50px]">
      <>
        <Link
          to={"/"}
          className={` mx-2   text-sm py-1 uppercase font-medium text-primary hover:text-sky-700 ${
            isLinkActive("/") ? "active-link" : ""
          }`}
        >
          home
        </Link>
        <Link
          to={"products"}
          className={` mx-2  text-sm py-1  uppercase font-medium text-primary hover:text-sky-700 ${
            isLinkActive("/products") ? "active-link" : ""
          }`}
        >
          products
        </Link>
        <Link
          to={"login"}
          className={` mx-2   text-sm py-1  uppercase font-medium text-primary hover:text-sky-700 ${
            isLinkActive("/login") ? "active-link" : ""
          }`}
        >
          login
        </Link>
      </>
    </nav>
  );
}
