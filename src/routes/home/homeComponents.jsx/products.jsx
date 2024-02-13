import { useDispatch, useSelector } from "react-redux";
// import { selectStockList } from "../../../store/home/home.selector";
import { fetchProducts, filterProducts, searchProducts } from "../../../store/home/home.store";
import { useEffect, useState } from "react";
import { Box, Button, useTheme } from "@mui/material";
import MainCard from "../../../components/cards/main.card";

export default function Products() {
  const products = useSelector((state) => state.home.products) || [];
  const dispatch = useDispatch();

  const theme = useTheme();

  // STATES
  const [categories, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [offset, setOffset] = useState(6);

  const getCategory = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  };

  useEffect(() => {
    dispatch(fetchProducts());
    getCategory();
  }, [dispatch]);

  const filterProduct = (value) => {
    if (value === "all") {
      dispatch(fetchProducts());
    } else {
      dispatch(filterProducts(value));
    }
    setSelectedCategory(value);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
    dispatch(searchProducts(e.target.value));
  };

  const fetchMoreData = () => {
    setOffset((prevOffset) => prevOffset + 5);
  };

  return (
    <section className="md:py-16 py-10 shadow-md">
      <div className="container gap-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-col-1">
        {products.slice(0, 8).map((product) => {
          return (
            <div key={product.id}>
              <MainCard
                id={product.id}
                image={product.image}
                title={product.title}
                category={product.category}
                price={product.price}
                description={product.description}
              />
            </div>
          );
        })}
        {/* <MainCard /> */}
      </div>
    </section>
  );
}
