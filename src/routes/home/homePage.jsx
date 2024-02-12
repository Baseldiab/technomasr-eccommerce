import { useSelector } from "react-redux";
import Header from "./homeComponents.jsx/header";
import Products from "./homeComponents.jsx/products";
import Loading from "../../components/loading";

export default function HomePage() {
  const isLoading = useSelector((state) => state.home.loading);

  return (
    <>
      <Header />
      {isLoading ? <Loading /> : <Products />}
    </>
  );
}
